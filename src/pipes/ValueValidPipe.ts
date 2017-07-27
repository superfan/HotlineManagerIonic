import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'valueValid'})
export class ValueValidPipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value === 'string') {
      return value === 'undefined' || value === 'null' ? '' : value;
    } else if (typeof value === 'number') {
      return value.toString();
    } else {
      return '';
    }
  }
}
