import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const arr = new Array(value);
    for(let i = 0; i < value; i++) {
      arr[i] = i;
    }
    return arr;
  }

}
