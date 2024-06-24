import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavModel } from '../models/fav-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(private http:HttpClient) { }
  url:string = "https://localhost:7190"

getAll(name?:string, oAgain?:boolean):Observable<FavModel[]> {

if (name !== undefined && oAgain !== undefined){
return this.http.get<FavModel[]>(`${this.url}/api/OrderAPI/?name=${name}&Orderagain=${oAgain}`);}

else if(name !==undefined){
return this.http.get<FavModel[]>(`${this.url}/api/OrdersAPI/?name=${name}`);}

else if(oAgain !==undefined){
  return this.http.get<FavModel[]>(`${this.url}/api/OrdersAPI/?Orderagain=${oAgain}`);}

else{return this.http.get<FavModel[]>(`${this.url}/api/OrdersAPI/`);}

}



addOrder(newOrder:FavModel):Observable<FavModel>{
return this.http.post<FavModel>(`${this.url}/api/OrdersAPI`,newOrder)
}
deleteOrder(id:number):Observable<void>{

return this.http.delete<void>(`${this.url}/api/OrdersAPI/${id}`)

}




}




