import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from "../person";
import { Sex } from "../sex.enum";
import { MovementStatus } from "../movement-status.enum";

import { PeopleService }  from '../people.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
	person:Person;

  constructor(
	private route: ActivatedRoute,
	private peopleService: PeopleService,
	private location: Location
  ) { }

  ngOnInit() {
  	this.getPerson();
  }
  getPerson(){
	  const id = this.route.snapshot.paramMap.get('id');
	  this.peopleService.getPerson(id)
	    .subscribe(person => this.person = person);
  }

}
