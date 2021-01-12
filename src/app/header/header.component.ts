import { NetserviceService } from '../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }
total;
myAccount=["My Profile","Orders","WishList"];
more=["Notifications","Sell on FlipKart","24X7 Customer Care","Advertise"];
mobiles=[{link:"/home/Mobiles/Mi",active:"active",text:"Mi"},
{link:"/home/Mobiles/RealMe",active:"active",text:"RealMe"},
{link:"/home/Mobiles/Samsung",active:"active",text:"Samsung"},
{link:"/home/Mobiles/OPPO",active:"active",text:"OPPO"},
{link:"/home/Mobiles/Apple",active:"active",text:"Apple"}]; 
laptops=[{link:"/home/Laptops/Apple",active:"active",text:"Apple"},
{link:"/home/Laptops/HP",active:"active",text:"HP"},
{link:"/home/Laptops/Dell",active:"active",text:"Dell"},
{link:"/home/Laptops/Acer",active:"active",text:"Acer"}];
cameras=[{link:"/home/Cameras/DSLR",active:"active",text:"DSLR"},
{link:"/home/Cameras/Lens",active:"active",text:"Lens"},
{link:"/home/Cameras/Tripods",active:"active",text:"Tripods"},
{link:"/home/Cameras/Compact",active:"active",text:"Compact"},
{link:"/home/Cameras/Accessories",active:"active",text:"Accessories"}];
ngOnInit() {
    this.net.totalItems$.subscribe(res=>{
      this.total=res;
      console.log(this.total);
  });
  }

 show:boolean=true;
  search="";
  searchShow(s){
 this.search=s;
  let path=this.router.url;
  var x= this.net.mobile.find(obj=>obj.toLowerCase().indexOf(s) >= 0);
  if(x){
    path= "/home/Mobiles";
  }
  else{
    x= this.net.laptop.find(obj=>obj.toLowerCase().indexOf(s) >= 0);
  
    path= "/home/Laptops";
  }
  if(!x){
    x= this.net.camera.find(obj=>obj.toLowerCase().indexOf(s) >= 0);
    path= "/home/Cameras";
  }
  console.log(x);
  if(s){
    var query={page:1,q:s};
   this.router.navigate([path],{queryParams:query});
  }
  else
  this.router.navigate([path]);
 }
 showIcon(s){
  
  if(s.length==0)
  this.show=true;
  else false;
  }
}
