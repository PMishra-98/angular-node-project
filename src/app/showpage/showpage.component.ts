import { NetserviceService } from './../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})
export class ShowpageComponent implements OnInit {
urlMobile="https://us-central1-fytpo-f6ed3.cloudfunctions.net/app/product/";
url="https://us-central1-flsite-f6ek3.cloudfunctions.net/app/product/";

constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }
details1=[];
details2=[];
image="";
id="";
brand="";
cartData=[];
  ngOnInit() {
  this.route.paramMap.subscribe(resp=>{
    this.id= resp.get("id");
    this.brand= resp.get("brand");
    this.getData();
    
  });
 }
 
  getData(){
    var temp="";
  var x= this.net.mobile.find(obj=>obj===this.brand);
  if(x){
    temp= this.urlMobile+this.id;
  }
  else{
    temp= this.url+this.id;
  }

  
    console.log(this.id);
  
      this.net.getData(temp).subscribe(resp=>{
       this.net.imgShow=resp; 
       console.log(resp);
      this.details1=this.net.imgShow.pics;
      this.details2=this.net.imgShow.prod;
      var x=this.net.imgShow.pics.imgList[0];
       this.image=x;
     });
   }
   showImages(show){
      this.image=show;
   }
   addToCart(str){
     if(this.net.cartData.length<1) this.net.cartData.push(this.details2);
    else{
     var x= this.net.cartData.find(obj=>{
         if(obj.id===str)
          return true;
        });
        if(x==undefined) this.net.cartData.push(this.details2);
        else{
          this.net.cartData.filter(obj=>{
            if(obj.id===str) obj.count +=1;
          });
        }
     }
     this.net.cartData.map(n=>{if(n.count===undefined)n.count=1 });
     if(this.net.cartData.length===1) this.net.cartItem=this.net.cartData[0].count;
     else  this.net.cartItem=this.net.cartData.reduce((acc,curr)=>acc.count+curr.count);
     this.net.updateCartCount();
     console.log(this.net.cartData, this.net.cartItem);
   }
   byNow(str){
     this.addToCart(str);
     this.router.navigate(["/home/checkout"]);
   }
}
