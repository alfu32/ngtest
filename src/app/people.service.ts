import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Person } from "./person";
import { Sex } from "./sex.enum";
import { MovementStatus } from "./movement-status.enum";

import { MOCK_LIST } from "./mock-data/mock-data.module"

@Injectable()
export class PeopleService {

  constructor() { }
  getPeople():Person[]{
  	return MOCK_LIST;
  }
  getPerson(name: string): Observable<Person> {
  // Todo: send the message _after_ fetching the hero
  //this.messageService.add(`PeopleService: fetched name=${name}`);
  return of(MOCK_LIST.find(person => person.name === name));
}

}
