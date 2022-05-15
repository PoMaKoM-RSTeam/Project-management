import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';

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
    MatToolbarModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
  ],
  exports: [HeaderComponent, FooterComponent, DropdownFilterComponent],
})
export class CoreModule {}
