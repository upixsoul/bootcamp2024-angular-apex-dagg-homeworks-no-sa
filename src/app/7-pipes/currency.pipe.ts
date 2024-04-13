import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(val : number) : string {  
    let result = "MX$";
    result += val.toString();
    return result;
  }  

}
