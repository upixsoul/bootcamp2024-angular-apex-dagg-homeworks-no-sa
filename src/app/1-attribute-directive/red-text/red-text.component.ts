import { Component } from '@angular/core';

@Component({
  selector: 'app-red-text',
  templateUrl: './red-text.component.html',
  styleUrl: './red-text.component.scss'
})
export class RedTextComponent {
  public active : boolean = false;
  public activeStyle : boolean = false;
  
  calculateStyles(): { [klass: string]: any; }|null|undefined {
    if(this.activeStyle)
    {
      return { 'color': 'red' };
    }
    else
    {
      return { };
    }
  }
  toggleStyleFunc() {
    this.activeStyle = !this.activeStyle;
  }
  
  toggleFunc() {
    this.active = !this.active;
  }
    
}
