import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],

 providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {
images=[ {img:"https://i.ibb.co/tq9j6V7/4dfdf0c59f26c4a1.jpg",link:""},
{img:"https://i.ibb.co/qxHzVsp/30d7dffe1a1eae09.jpg",link:"/home/Mobiles/RealMe/M17"},{img:"https://i.ibb.co/vQZhcvT/68af1ae7331acd1c.jpg",link:""}
];
  ngOnInit() {
   
  }
  constructor(private config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
 
    this.config.interval = 3000;

  this.config.wrap =true;
  this.config.keyboard = true;
  this.config.pauseOnHover = true;
  }
  }