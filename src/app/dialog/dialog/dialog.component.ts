import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { Width } from '../../../constants/enums';
import { DialogDescriptionService } from '../../services/dialog-description.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Output() emitText: EventEmitter<any> = new EventEmitter();

  @Input() question: string | undefined;

  @Input() isNeedDescription: boolean | undefined;

  constructor(public dialog: MatDialog, public dialogDescriptionService: DialogDescriptionService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: Width.MEDIUM,
      data: {
        question: this.question,
        isNeedDescription: this.isNeedDescription,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result', result);
      if (this.isNeedDescription) {
        console.log('dialogDescriptionService', this.dialogDescriptionService.description);
        this.emitText.emit({ text: result, description: this.dialogDescriptionService.description });
      } else {
        this.emitText.emit(result);
      }
    });
  }
}
