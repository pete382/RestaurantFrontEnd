import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FavModel } from '../../models/fav-model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  @Output() SubmittedOrder = new EventEmitter<FavModel>();

  orderForm:FavModel= {} as FavModel;

  emitSubmitted(){
    let newOrder: FavModel = { ...this.orderForm};
    newOrder.orderagain = false;
    this.SubmittedOrder.emit(newOrder);}

}
