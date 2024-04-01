import { Component } from '@angular/core';
import { Injectable2Service } from '../injectable2.service';

@Component({
  selector: 'app-my-injectable2',
  templateUrl: './my-injectable2.component.html',
  styleUrl: './my-injectable2.component.scss'
})
export class MyInjectable2Component {
  myComponentVar: string = "";
  constructor(private service2:Injectable2Service){

  }

  ngAfterContentInit()
  {
    this.myComponentVar = this.service2.getPersistentData();
  }
}
