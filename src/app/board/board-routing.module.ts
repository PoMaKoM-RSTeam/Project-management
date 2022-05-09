import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SpaceComponent } from './pages/space/space.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [{ path: 'board/:id', component: BoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
