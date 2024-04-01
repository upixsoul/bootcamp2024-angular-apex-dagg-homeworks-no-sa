import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInjectableComponent } from './my-injectable.component';
import { Injectable1Service } from '../injectable1.service';



@NgModule({
  declarations: [
    MyInjectableComponent,
  ],
  providers: [
    Injectable1Service
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyInjectableComponent
  ]
})
export class MyInjectableModule { }
