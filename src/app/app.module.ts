import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedTextComponent } from './1-attribute-directive/red-text/red-text.component';
import { MultipleListsConditionalComponent } from './2-structural-directive/multiple-lists-conditional/multiple-lists-conditional.component';
import { CustomDirectiveComponent } from './3-custom-directive/custom-directive/custom-directive.component';
import { CustomDirective } from './3-custom-directive/custom.directive';
import { DataBindingComponent } from './4-data-binding/data-binding/data-binding.component';
import { MyFirstModuleModule } from './5-modules/my-first-module/my-first-module.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RedTextComponent,
    MultipleListsConditionalComponent,
    CustomDirectiveComponent,
    CustomDirective,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyFirstModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
