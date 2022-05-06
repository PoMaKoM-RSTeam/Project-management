import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { Width } from '../../../constants/enums';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Output() emitText: EventEmitter<any> = new EventEmitter();

  @Input() question: string | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: Width.MEDIUM,
      data: { question: this.question },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.emitText.emit(result);
    });
  }
}
