import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,  BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NetserviceService {
  constructor(private http:HttpClient) { }
mobile=["Mi","RealMe","Samsung","OPPO","Apple"]; 
laptop=["Apple","HP","Dell","Acer"];
camera=["DSLR","Lens","Tripods","Compact","Accessories"];
path="";
cartData=[];
imgShow:any=[];
details:any=[];
cartItem;
private totalItems =new BehaviorSubject(0);
totalItems$ = this.totalItems.asObservable();
  getData(url){
    return this.http.get(url);
  }
  postData(url,obj){
    return this.http.post(url,obj);
  }
  updateCartCount() {
    this.totalItems.next(this.cartItem);
}
}
