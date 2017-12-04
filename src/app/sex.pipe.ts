import { Pipe, PipeTransform } from '@angular/core';
import { Sex } from "./sex.enum";

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: Sex, args?: any): any {
    return Sex[value];
  }

}
