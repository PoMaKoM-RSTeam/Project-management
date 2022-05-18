import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { ConfirmModule } from '../confirm/confirm.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileRoutingModule,
    ConfirmModule,
    NzIconModule,
    LoaderModule,
  ],
})
export class ProfileModule {}
