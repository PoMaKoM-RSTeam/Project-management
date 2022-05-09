import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmBodyComponent } from './confirm-body/confirm-body.component';

@NgModule({
  declarations: [ConfirmComponent, ConfirmBodyComponent],
  imports: [CommonModule, MatDialogModule, NzButtonModule],
  exports: [ConfirmComponent],
})
export class ConfirmModule {}
