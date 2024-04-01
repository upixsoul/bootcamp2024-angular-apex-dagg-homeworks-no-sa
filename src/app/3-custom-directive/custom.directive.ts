import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CustomDirective {

  constructor(private eleRef: ElementRef) {}

  ngOnInit() {
    let elementText:string = this.eleRef.nativeElement.innerText;
    let allWords = elementText.includes(" ")? elementText.split(" "): [];
    let buildText = "";

    if(elementText.length > 0)
    {
      if(allWords.length > 0)
      {
        allWords.forEach((word)=>{
          buildText += this.capitalizeText(word) + " ";
        });
      }
      else
      {
        buildText = this.capitalizeText(elementText);
      }
    }
    
    this.eleRef.nativeElement.innerText = buildText;
  }
  
  capitalizeText(word:string) 
  {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
