import { Component } from '@angular/core';
import { Injectable1Service } from '../injectable1.service';

@Component({
  selector: 'app-my-injectable',
  templateUrl: './my-injectable.component.html',
  styleUrl: './my-injectable.component.scss',
})
export class MyInjectableComponent {
  myComponentVar: string = "";
  constructor(private service1:Injectable1Service){

  }

  ngAfterContentInit()
  {
    this.myComponentVar = this.service1.getMyVar();
  }
}
