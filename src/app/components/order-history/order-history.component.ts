import { Component, Input, Output } from '@angular/core';
import { ApiBackendService } from '../../services/api-backend.service';
import { FavModel } from '../../models/fav-model';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FormComponent } from "../form/form.component";


@Component({
    selector: 'app-order-history',
    standalone: true,
    templateUrl: './order-history.component.html',
    styleUrl: './order-history.component.css',
    imports: [FormsModule, NgFor, NgIf, FormComponent]
})
export class OrderHistoryComponent {

  @Input() displayFavs:FavModel = {} as FavModel;

  allOrders:FavModel[]=[];
  restaurantSearch:string = "";
  orderAgain?: boolean = undefined;

constructor(private _api:ApiBackendService){}




ngOnInit(){
this.All();
}


  All() {
    if(this.restaurantSearch != "" && this.orderAgain != undefined){
      this._api.getAll(this.restaurantSearch, this.orderAgain).subscribe((response:FavModel[]) =>{
        console.log(response);
        this.allOrders = response;
      });}
    
    else if(this.restaurantSearch != ""){
      this._api.getAll(this.restaurantSearch).subscribe((response:FavModel[]) =>{
        console.log(response);

        
        this.allOrders = response;
      });
    }
    else if(this.orderAgain != undefined){
      this._api.getAll(undefined, this.orderAgain).subscribe((response:FavModel[]) =>{
        console.log(response);
        this.allOrders = response;
      });
    }
    else{
      this._api.getAll().subscribe((response:FavModel[]) =>{
        console.log(response);
        this.allOrders = response;
      });
    }
  }



  addOrder(o:FavModel){
    this._api.addOrder(o).subscribe((response:FavModel)=>{
      console.log(response);
      this.All();
    })
  }

  deleteOrder(o:FavModel){
    this._api.deleteOrder(o.id).subscribe((response) => {
      this.All();
    })
  }



}






