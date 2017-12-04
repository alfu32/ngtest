import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from "../person";
import { Sex } from "../sex.enum";
import { MovementStatus } from "../movement-status.enum";

export const MOCK_LIST:Person[]=[
	new Person().initWithObject({name:"Andy",birthday:new Date(),sex:Sex.MALE,status:MovementStatus.SITTING}),
	new Person().initWithObject({name:"Bert",birthday:new Date(),sex:Sex.MALE,status:MovementStatus.SITTING}),
	new Person().initWithObject({name:"Clay",birthday:new Date(),sex:Sex.MALE,status:MovementStatus.SITTING}),
	new Person().initWithObject({name:"Dana",birthday:new Date(),sex:Sex.FEMALE,status:MovementStatus.SITTING}),
	new Person().initWithObject({name:"Emma",birthday:new Date(),sex:Sex.FEMALE,status:MovementStatus.SITTING}),
	new Person().initWithObject({name:"Fred",birthday:new Date(),sex:Sex.MALE,status:MovementStatus.SITTING}),
	new Person().initWithObject({name:"Greg",birthday:new Date(),sex:Sex.MALE,status:MovementStatus.SITTING}),
	new Person().initWithObject({name:"Hugh",birthday:new Date(),sex:Sex.MALE,status:MovementStatus.SITTING})
];
