import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../people.service";
import { Person } from "../person";
import { Sex } from "../sex.enum";
import { MovementStatus } from "../movement-status.enum";


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  people:Person[];
  constructor(private peopleService: PeopleService) { }
  getPeople(){
  	this.people=this.peopleService.getPeople();
  }
  ngOnInit() {
  	this.getPeople();
  }

}
