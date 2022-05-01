import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceComponent } from './pages/space/space.component';
import { BoardComponent } from '../board/board/board.component';

const routes: Routes = [
  { path: '', component: SpaceComponent },
  { path: 'board', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceRoutingModule {}