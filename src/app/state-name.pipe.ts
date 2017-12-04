import { Pipe, PipeTransform } from '@angular/core';
import { MovementStatus } from "./movement-status.enum";

@Pipe({
  name: 'stateName'
})
export class StateNamePipe implements PipeTransform {

  transform(value: MovementStatus, args?: any): any {
    return MovementStatus[value];
  }

}
