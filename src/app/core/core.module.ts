import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NotFoundComponent,
    DropdownFilterComponent,
    WelcomePageComponent,
  ],
  imports: [CommonModule, AuthModule, NzIconModule, NzDropDownModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, DropdownFilterComponent, WelcomePageComponent],
})
export class CoreModule {}
