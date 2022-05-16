import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [AuthButtonComponent, AuthComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTabsModule,
    LoaderModule,
    NzIconModule,
  ],
  exports: [AuthButtonComponent],
  providers: [NzMessageService],
})
export class AuthModule {}
