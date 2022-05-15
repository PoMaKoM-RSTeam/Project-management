import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

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
  ],
})
export class SettingsModule {}
