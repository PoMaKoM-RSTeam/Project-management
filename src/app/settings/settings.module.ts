import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { LocalizationModule } from '../localization/localization.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SettingsRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    FormsModule,
    NzCardModule,
    NzGridModule,
    NzSelectModule,
    LocalizationModule,
  ],
})
export class SettingsModule {}
