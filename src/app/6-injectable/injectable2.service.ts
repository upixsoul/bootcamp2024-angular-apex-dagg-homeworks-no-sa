import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Injectable2Service {
  private persistentData: string ="";
  constructor() {
    this.persistentData = "Im a variable inside a singleton.";
  }

  public getPersistentData(): string {
    return this.persistentData;
  }
}
