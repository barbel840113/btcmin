import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contianerspipe'
})
export class ContianersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
