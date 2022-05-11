import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthModule } from '../auth/auth.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, NotFoundComponent, DropdownFilterComponent],
  imports: [
    CommonModule,
    AuthModule,
    NzIconModule,
    NzDropDownModule,
    RouterModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [HeaderComponent, FooterComponent, DropdownFilterComponent],
})
export class CoreModule {}
