import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmBodyComponent } from './confirm-body/confirm-body.component';
import { LocalizationModule } from '../localization/localization.module';

@NgModule({
  declarations: [ConfirmComponent, ConfirmBodyComponent],
  imports: [CommonModule, MatDialogModule, NzButtonModule, LocalizationModule],
  exports: [ConfirmComponent],
})
export class ConfirmModule {}
