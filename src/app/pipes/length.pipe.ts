import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: string,length:number): string {
    if(value.length>length)
      return value.substring(0,length) +'...';
    else
      return value;
  }
}
