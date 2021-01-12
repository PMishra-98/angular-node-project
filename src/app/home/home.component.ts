import { NetserviceService } from './../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
details:any=[];

url="https://us-central1-fytpo-f6ed3.cloudfunctions.net/app/products/Mobiles?page=";
  constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }
  page=1;
  ngOnInit() {
   this.getData();
  }
 
getData(){
  console.log(this.router.url);
 var temp= this.url+this.page;

  this.net.getData(temp).subscribe(resp=>{
    this.net.details=resp; 
    this.details=this.net.details.data;
     console.log(resp);
  });
  console.log(temp);
}
goToPage(x){
 
  this.page=this.page+x;
  this.getData();
    }
showDetails(i){
  //this.net.moviecity=this.city;
 // this.router.navigate(['/home/'+this.city+'/'+i]);
}
}
