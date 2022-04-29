import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { SpaceComponent } from './pages/space/space.component';
import { AppRoutingModule } from '../app-routing.module';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceHaederComponent } from './components/space-haeder/space-haeder.component';
import { SpaceNavComponent } from './components/space-nav/space-nav.component';

@NgModule({
  declarations: [SpaceComponent, LeftAsideComponent, SpaceHaederComponent, SpaceNavComponent],
  imports: [CommonModule, AppRoutingModule, SpaceRoutingModule, NzMenuModule, NzIconModule, NzToolTipModule],
  exports: [SpaceComponent],
})
export class SpaceModule {}
