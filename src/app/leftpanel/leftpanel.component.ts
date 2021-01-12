import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {
 
  @Input() processorCB;
  @Input() brandCB;
  @Input() ramCB;
  @Input() priceCB;
  @Input() ratingCB;
  @Output() optSel=new EventEmitter();
  constructor() { }
  isExpanded1:boolean=true;
  isExpanded2:boolean=true;
  isExpanded3:boolean=true;
  toggle1(){
  this.isExpanded1=!this.isExpanded1;
  }
  toggle2(){
    this.isExpanded2=!this.isExpanded2;
  }
  toggle3(){
    this.isExpanded3=!this.isExpanded3;
  }
  ngOnInit() {
  }

 eventChange(){
 
  this.optSel.emit();
 }
 
}
