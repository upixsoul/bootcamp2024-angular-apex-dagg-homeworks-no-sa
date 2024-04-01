import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
oneWayText: string="";
twoWaysText: string="";

clickMe() {
  alert("I Was Triggered by an Event")
}

ngAfterContentInit(): void {
  this.oneWayText = this.twoWaysText = "Hello World";
}

twoWaysChangeText($event: Event) {
  let htmlElement = $event.target as HTMLInputElement;
  this.twoWaysText = htmlElement.value||"";
  }

}
