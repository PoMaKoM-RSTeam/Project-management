import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { SpaceComponent } from './pages/space/space.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceHeaderComponent } from './components/space-header/space-header.component';
import { SpaceNavComponent } from './components/space-nav/space-nav.component';
import { ListComponent } from './components/list/list.component';
import { CoreModule } from '../core/core.module';
import { PhaseComponent } from './components/phase/phase.component';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [
    SpaceComponent,
    LeftAsideComponent,
    SpaceHeaderComponent,
    SpaceNavComponent,
    ListComponent,
    PhaseComponent,
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    NzCollapseModule,
    NzButtonModule,
    CoreModule,
    DialogModule,
  ],
  exports: [SpaceComponent, SpaceHeaderComponent, LeftAsideComponent],
})
export class SpaceModule {}
