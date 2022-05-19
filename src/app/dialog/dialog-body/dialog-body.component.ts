import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDescriptionService } from '../../services/dialog-description.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss'],
})
export class DialogBodyComponent {
  @Output() emitDescription: EventEmitter<string> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogDescriptionService: DialogDescriptionService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
