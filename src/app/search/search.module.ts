import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { CoreModule } from '../core/core.module';
import { BoardModule } from '../board/board.module';
import { LoaderModule } from '../loader/loader.module';
import { LocalizationModule } from '../localization/localization.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CoreModule,
    NzIconModule,
    ReactiveFormsModule,
    BoardModule,
    NzEmptyModule,
    LoaderModule,
    LocalizationModule,
  ],
})
export class SearchModule {}
