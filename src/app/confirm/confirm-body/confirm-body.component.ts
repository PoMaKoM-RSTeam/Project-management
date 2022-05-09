import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-body',
  templateUrl: './confirm-body.component.html',
  styleUrls: ['./confirm-body.component.scss'],
})
export class ConfirmBodyComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmBodyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
