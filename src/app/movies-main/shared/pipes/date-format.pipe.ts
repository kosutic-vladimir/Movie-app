import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euDateFormat'
})
export class EuDateFormatPipe implements PipeTransform {

  transform(value: string): string {
    const dateArray = value.split('-');
    if (dateArray.length !== 3) {
      return value; 
    }
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
  }

}