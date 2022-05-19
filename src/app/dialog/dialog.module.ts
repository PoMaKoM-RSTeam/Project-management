import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogComponent } from './dialog/dialog.component';
import { LocalizationModule } from '../localization/localization.module';

@NgModule({
  declarations: [DialogComponent, DialogBodyComponent],
  imports: [CommonModule, FormsModule, MatDialogModule, NzButtonModule, LocalizationModule],
  exports: [DialogComponent],
})
export class DialogModule {}
