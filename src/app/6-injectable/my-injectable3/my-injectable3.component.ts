import { Component } from '@angular/core';
import { Injectable2Service } from '../injectable2.service';

@Component({
  selector: 'app-my-injectable3',
  templateUrl: './my-injectable3.component.html',
  styleUrl: './my-injectable3.component.scss'
})
export class MyInjectable3Component {
  myComponentVar: string = "";
  constructor(private service2:Injectable2Service){

  }

  ngAfterContentInit()
  {
    this.myComponentVar = this.service2.getPersistentData();
  }
}
