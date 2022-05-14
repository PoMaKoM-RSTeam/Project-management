import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { WelcomePageComponent } from './core/pages/welcome-page/welcome-page.component';
import { AboutPageComponent } from './core/pages/about-page/about-page.component';
import { PathUrl } from '../constants/enums';

const routes: Routes = [
  {
    path: PathUrl.AUTH,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    pathMatch: 'full',
  },
  {
    path: PathUrl.HOME,
    component: WelcomePageComponent,
  },
  {
    path: PathUrl.ABOUT,
    component: AboutPageComponent,
  },
  {
    path: PathUrl.HOME,
    loadChildren: () => import('./space/space.module').then((m) => m.SpaceModule),
    canActivate: [AuthGuard],
  },
  {
    path: PathUrl.PROFILE,
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
