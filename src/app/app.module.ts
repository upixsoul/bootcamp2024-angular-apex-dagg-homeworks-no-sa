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
import { MyInjectableModule } from './6-injectable/my-injectable/my-injectable.module';
import { MyInjectable3Component } from './6-injectable/my-injectable3/my-injectable3.component';
import { MyInjectable2Module } from './6-injectable/my-injectable2/my-injectable2.module';
import { PipesComponent } from './7-pipes/pipes/pipes.component';
import { CurrencyPipe } from './7-pipes/currency.pipe';
import { CapitalPipe } from './7-pipes/capital.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MaterialComponent } from './8-material/material/material.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { UserDialogComponent } from './8-material/user-dialog/user-dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MyOtherMainComponent } from './5-modules/my-other-main/my-other-main.component';


@NgModule({
  declarations: [
    AppComponent,
    RedTextComponent,
    MultipleListsConditionalComponent,
    CustomDirectiveComponent,
    CustomDirective,
    DataBindingComponent,
    MyInjectable3Component,
    PipesComponent,
    CurrencyPipe,
    CapitalPipe,
    MaterialComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyFirstModuleModule,
    MyInjectableModule,
    MyInjectable2Module,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
