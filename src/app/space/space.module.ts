import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

import { SpaceComponent } from './pages/space/space.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceHeaderComponent } from './components/space-header/space-header.component';
import { SpaceNavComponent } from './components/space-nav/space-nav.component';
import { ListComponent } from './components/list/list.component';
import { ListBarComponent } from './components/list-bar/list-bar.component';
import { CoreModule } from '../core/core.module';
import { PhaseComponent } from './components/phase/phase.component';

@NgModule({
  declarations: [
    SpaceComponent,
    LeftAsideComponent,
    SpaceHeaderComponent,
    SpaceNavComponent,
    ListComponent,
    ListBarComponent,
    PhaseComponent,
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    NzCollapseModule,
    CoreModule,
  ],
  exports: [SpaceComponent, SpaceHeaderComponent, LeftAsideComponent],
})
export class SpaceModule {}
