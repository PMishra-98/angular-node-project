import { NetserviceService } from '../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
count=0;
cartData=[];
total=0;
amount=0;
constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
  if(this.net.cartData.length>0){
    this.cartData=this.net.cartData;
    this.showAmount();
  }
   
  }
showAmount(){
  
  if(this.cartData.length===1) {
    this.net.cartItem=this.net.cartData[0].count;
    this.amount= this.cartData[0].count*this.cartData[0].price;
  }
  else {
    this.net.cartItem=this.net.cartData.reduce((acc,curr)=>acc.count+curr.count);
    this.amount=this.cartData.reduce((acc,curr)=>acc.count*acc.price+curr.count*curr.price);
  }
  this.total=this.net.cartItem;
  this.net.updateCartCount();
}
add(i){
  this.cartData[i].count +=1;
  this.showAmount();
}
remove(i){
  this.cartData[i].count -=1;
  this.showAmount();
}
}
