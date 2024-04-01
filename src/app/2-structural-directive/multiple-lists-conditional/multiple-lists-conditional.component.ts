import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-lists-conditional',
  templateUrl: './multiple-lists-conditional.component.html',
  styleUrl: './multiple-lists-conditional.component.scss'
})
export class MultipleListsConditionalComponent {
  public myArray: Array<string> = ["A", "B", "C"];
}
