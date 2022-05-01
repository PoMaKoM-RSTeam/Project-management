import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@NgModule({
  declarations: [AuthButtonComponent],
  imports: [CommonModule, NzAvatarModule],
  exports: [AuthButtonComponent],
})
export class AuthModule {}
