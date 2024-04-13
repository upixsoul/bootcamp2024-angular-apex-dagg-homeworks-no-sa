import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(val: string): string {
    let allWords = val.includes(" ")? val.split(" "): [];
    let buildText = "";

    if(val.length > 0)
    {
      if(allWords.length > 0)
      {
        allWords.forEach((word)=>{
          buildText += this.capitalizeText(word) + " ";
        });
      }
      else
      {
        buildText = this.capitalizeText(val);
      }
    }
    
    return buildText;
  }

  capitalizeText(word:string) 
  {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

}
