import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, NotFoundComponent],
  imports: [CommonModule, AuthModule, AppRoutingModule, NzIconModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
