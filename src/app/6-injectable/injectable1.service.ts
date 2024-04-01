import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class Injectable1Service {
  private myVar: string ="";
  constructor() {
    this.myVar = "One";
  }

  public getMyVar(): string {
    return this.myVar;
  }
}
