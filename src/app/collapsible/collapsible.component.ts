import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';


@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {
  visible: boolean = false;
  @Input() title:string;
  @Output() statechange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 
  toggle() {
    this.visible = !this.visible;
    this.statechange.emit({emmiter:this});
  }
}
