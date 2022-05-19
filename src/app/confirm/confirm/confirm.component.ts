import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBodyComponent } from '../confirm-body/confirm-body.component';
import { Width } from '../../../constants/enums';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  @Output() emitConfirm: EventEmitter<any> = new EventEmitter();

  @Input() question: string | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmBodyComponent, {
      width: Width.MEDIUM,
      data: { question: this.question },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.emitConfirm.emit(result);
    });
  }
}
