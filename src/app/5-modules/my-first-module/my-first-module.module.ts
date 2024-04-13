import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
import { MySecondComponentComponent } from '../my-second-component/my-second-component.component';

const routes: Routes = [
  {
    path: 'first',
    component: MyFirstComponentComponent,
  },
  {
    path: 'second',
    component: MySecondComponentComponent,
  }
];


@NgModule({
  declarations: [
    MyFirstComponentComponent,
    MySecondComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    //RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
  
})
export class MyFirstModuleModule { }
