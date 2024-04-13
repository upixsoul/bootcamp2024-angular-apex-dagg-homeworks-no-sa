import { Component } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

export interface User {
  name: string;
} 

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
})
export class MaterialComponent {
  user = { name: ''};
  dialogRef: any;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialogRef = this.dialog.open(UserDialogComponent, 
      { data: this.user, height: '300px', width: '300px', autoFocus: true });

    this.dialogRef.afterClosed().subscribe((result: User) => {
      this.user.name = result?.name;
    });
  }
}
