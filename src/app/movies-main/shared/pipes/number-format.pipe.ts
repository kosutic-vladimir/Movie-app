import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe'
})
export class NumberPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) return "N/A";
    if (value === 0)  return "N/A";
 
    let str = value.toString();
    const length = str.length;

    if (length <= 6) { 
      return (value / 1_000).toFixed(0) + " thousand";
    } else if (length <= 9) { 
      return (value / 1_000_000).toFixed(0) + " million";
    } else if (length <= 12) {
    return (value / 1_000_000_000).toFixed(0) + " billion";
    }else return "N/A";
}

}    