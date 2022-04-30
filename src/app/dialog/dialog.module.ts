import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [DialogComponent, DialogBodyComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatDialogModule],
  exports: [DialogComponent],
})
export class DialogModule {}
