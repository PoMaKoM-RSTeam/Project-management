import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceComponent } from './pages/space/space.component';
import { BoardComponent } from '../board/board/board.component';
import { PathUrl } from '../../constants/enums';

const routes: Routes = [
  { path: PathUrl.BOARD, component: SpaceComponent },
  { path: `${PathUrl.BOARD}/:id`, component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceRoutingModule {}
