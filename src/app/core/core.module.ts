import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SearchComponent } from './components/search/search.component';

import { SearchPipe } from './pipes/search/search.pipe';
import { LocalizationModule } from '../localization/localization.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NotFoundComponent,
    DropdownFilterComponent,
    WelcomePageComponent,
    AboutPageComponent,
    SearchComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    AuthModule,
    NzIconModule,
    NzDropDownModule,
    RouterModule,
    NzCollapseModule,
    LocalizationModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DropdownFilterComponent,
    WelcomePageComponent,
    AboutPageComponent,
    SearchComponent,
  ],
  providers: [TranslateService],
})
export class CoreModule {}
