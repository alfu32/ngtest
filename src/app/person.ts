import { Sex } from "./sex.enum";
import { MovementStatus } from "./movement-status.enum";
import { f } from "../@serializer";


export class Person {
	name:string;
	birthday:Date;
	sex:Sex;
	status:MovementStatus;
	initWithObject(params:any):Person{
		this.name=params.name;
		this.birthday=params.birthday;
		this.sex=params.sex;
		this.status=params.status;
		return this;
	}
	initWithJSON(json:string):Person{
		return this.initWithObject(JSON.parse(json));
	}

	@f()
	serialize():string{
		return JSON.stringify({
			name:this.name,
			birthday:this.birthday,
			sex:this.sex,
			status:this.status
		});
	}
}
