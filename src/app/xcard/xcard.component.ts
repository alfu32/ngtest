import { Component, OnInit,Input } from '@angular/core';
import { Person } from "../person";
import { Sex } from "../sex.enum";
import { MovementStatus } from "../movement-status.enum";

@Component({
  selector: 'app-xcard',
  templateUrl: './xcard.component.html',
  styleUrls: ['./xcard.component.css']
})
export class XcardComponent implements OnInit {

  constructor() { }
  @Input() person:Person;
  
  requestDetail(){
  	console.log(this);
  	return this;
  }
  ngOnInit() {
  }
  onCollapsibleStateChanged($event){
    console.log("onCollapsibleStateChanged",this,$event);
  }

}
