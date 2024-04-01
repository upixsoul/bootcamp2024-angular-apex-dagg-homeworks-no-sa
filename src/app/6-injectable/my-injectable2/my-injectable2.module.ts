import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInjectable2Component } from './my-injectable2.component';
import { Injectable2Service } from '../injectable2.service';



@NgModule({
  declarations: [MyInjectable2Component],
  imports: [
    CommonModule
  ],
  providers: [
    Injectable2Service
  ],
  exports: [
    MyInjectable2Component
  ]
})
export class MyInjectable2Module { }
