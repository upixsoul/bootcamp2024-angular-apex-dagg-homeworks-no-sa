import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
import { MySecondComponentComponent } from '../my-second-component/my-second-component.component';

const routes: Routes = [
  {
    path: '',
    component: MyFirstComponentComponent,
    outlet: 'main'
  },
  {
    path: 'second',
    component: MySecondComponentComponent,
    outlet: 'main'
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
  
})
export class MyFirstModuleModule { }
