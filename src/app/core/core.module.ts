import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, NotFoundComponent, DropdownFilterComponent],
  imports: [CommonModule, AuthModule, AppRoutingModule, NzIconModule, NzDropDownModule],
  exports: [HeaderComponent, FooterComponent, DropdownFilterComponent],
})
export class CoreModule {}
