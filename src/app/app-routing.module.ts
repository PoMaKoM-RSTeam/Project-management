import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceComponent } from './space/pages/space/space.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { BoardComponent } from './board/board/board.component';

const routes: Routes = [
  { path: '', component: SpaceComponent },
  { path: 'board', component: BoardComponent },
  // { path: 'calendar', component: SpaceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
