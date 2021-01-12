import { NetserviceService } from '../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }

brands="";
url="https://us-central1-flsite-f6ek3.cloudfunctions.net/app/products";
brandArray=["Nikon","Canon","Sony","Webilla","Miliboo","Benro"];
brandSelected="";
brand="";
bran=null;
ratingArray=["4","3","2","1"];
ratingSelected="";
rating=null;
rat=null;
priceArray=["0-5,000","5,000-10,000","10,000-20,000","More than 20000"];
priceSelected="";
price="";
pri="";
details=[];
search="";
brandStructure=null;
ratingStructure=null;
priceStructure=null;
sort="";
pages=[];
showcolor1:boolean;
showcolor2:boolean;
showcolor3:boolean;
assure:boolean;
currPage=0;
current;
page;
pageInfo:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.brands = params.get("brand");
      this.goToPage(1);
     });
   this.route.queryParamMap.subscribe(param=>{
    this.bran = param.get("brand");
    this.page = param.get("page");
    this.rat = param.get("rating");
    this.price = param.get("price");
    this.search = param.get("q");
    this.sort = param.get("sort");
    this.goToPage(this.page);
    this.getData();
   
   });
   this.goToPage(1);
   this.makeStructure();
   this.getData();
  }
  makeStructure(){
   
    this.brandSelected = this.brand ? this.brand:"";
    this.brandStructure = this.brandArray.map(pl1=>({
      brand:pl1,
      selected:false
    }));
    let temp1 = this.brandSelected.split(",");
    for(let i=0;i<temp1.length;i++){
      let item = this.brandStructure.find(p=>p.brand===temp1[i]);
      if(item) item.selected=true;
    }

    this.ratingSelected = this.rating ? this.rating:"";
    this.ratingStructure = this.ratingArray.map(pl1=>({
      rating:pl1,
      selected:false
    }));
    let temp2 = this.ratingSelected.split(",");
    for(let i=0;i<temp2.length;i++){
      let item = this.ratingStructure.find(p=>p.rating===temp1[i]);
      if(item) item.selected=true;
    }
     
    this.priceSelected = this.price ? this.price:"";
    this.priceStructure = this.priceArray.map(pl1=>({
      price:pl1,
      selected:false
    }));
    let temp3 = this.priceSelected.split(",");
    for(let i=0;i<temp3.length;i++){
      let item = this.priceStructure.find(p=>p.price===temp1[i]);
      if(item) item.selected=true;
    }
    console.log(this.assure);
  }
getData(){
 var temp= this.url+this.router.url.substring(5,this.router.url.length);
 this.net.getData(temp).subscribe(resp=>{
    this.net.details=resp; 
    this.details=this.net.details.data;
    this.details.map(obj=>{
      if(obj.like===undefined) obj.like=false
    });
    this.pages=[];
    this.pageInfo=this.net.details.pageInfo;
    this.current= +this.pageInfo.pageNumber;
  
    for(var i=0;i<this.pageInfo.numberOfPages;i++){
      var x={pagenum:i+1,showPage:false}
      this.pages.push(x);
    }
 console.log(this.pageInfo);
    this.pages.map(obj=>{
      if(obj.pagenum===this.current) obj.showPage=true;
    })
  });
  console.log("hello",this.pages,this.current)
 console.log(temp);
}
goToPage(x){
if(x=='next')   this.currPage = +this.page+1;
else this.currPage=x;
console.log(this.currPage);
  let path="/home/Cameras";
  if(this.brands) path="/home/Cameras/"+this.brands;
 let qparam = {page:this.currPage}; 
  
 this.router.navigate([path],{queryParams:qparam, queryParamsHandling:"merge"});
 
    }
optChange(){
  let path="/home/Cameras";
    if(this.brands) path="/home/Cameras/"+this.brands;
    let arr=[];
    let queryParams={};
  let temp1 =this.brandStructure.filter(p=>p.selected);
    let temp2 = temp1.map(p1=>p1.brand);
    this.brandSelected=temp2.join(",");
    console.log(this.brandSelected,temp2);
   if(this.brandSelected){
     arr.push({brand:this.brandSelected});
    }
  else
    arr.push({brand:null});
  
    let temp3 =this.ratingStructure.filter(p=>p.selected);
    let temp4 = temp3.map(p1=>p1.rating);
    this.ratingSelected=temp4.map(n=>{
      if(n) return ">"+n.slice(0,9);
    }).join(",");
   if(this.ratingSelected){
     arr.push({rating:this.ratingSelected,page:1});
    }
  else
    arr.push({rating:null});
let temp5 =this.priceStructure.filter(p=>p.selected);
    let temp6 = temp5.map(p1=>p1.price);
    this.priceSelected=temp6.map(n=>{
  if(n=="More than 20000") return n.slice(10,0)+"20000";
  else return n.split(',').join("");
    }).join(",");
   if(this.priceSelected){
     arr.push({price:this.priceSelected});
    }
  else
    arr.push({price:null});
    arr.push({page:1});
      queryParams = arr.reduce((arr, item) => Object.assign(arr, item, {}));
      this.router.navigate([path],{queryParams:queryParams,queryParamsHandling:"merge"});
}
like(i){
  this.details[i].like=!this.details[i].like;
}
  sortBy(str){
    if(str=="popularity"){
        this.showcolor1=true;
        this.showcolor2=false;
        this.showcolor3=false;  
    }
    if(str=="desc"){
      this.showcolor1=false;
      this.showcolor2=true;
      this.showcolor3=false;  
    }
    if(str=="asc"){
      this.showcolor1=false;
      this.showcolor2=false;
      this.showcolor3=true;  
    }
    let path="/home/Cameras";
    let qparam = {sort:str,page:1}; 
    if(this.brands) path="/home/Cameras/"+this.brands;
    if(str=='sort')  qparam = {sort:null,page:1}; 
    this.router.navigate([path],{queryParams:qparam,queryParamsHandling:"merge"});  
  }
  assureSelect(){
    let path="/home/Cameras";
    if(this.brands) path="/home/Cameras/"+this.brands;
    let qparam = {assured:null,page:1}; 
    if(this.assure) qparam = {assured:this.assure,page:1}; 
    this.router.navigate([path],{queryParams:qparam,queryParamsHandling:"merge"});
  }
}
