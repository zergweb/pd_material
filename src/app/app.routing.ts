import { Routes, RouterModule } from '@angular/router';


import { LkPageComponent } from './modules/lk/pages/lk-page/lk-page.component';
import { LkModule } from './modules/lk/lk.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

import { lkRoutes } from './modules/lk/lk.routing';
import { lkPublicRoutes } from './modules/lk/lk-public.routing ';

import { PublicProfilePageComponent } from './modules/lk/pages/public-pages/profile/public-profile-page.component';
import { PublicPortfolioPageComponent } from './modules/lk/pages/public-pages/portfolio/public-portfolio-page.component';
import { PublicProjectPageComponent } from './modules/lk/pages/public-pages/project/public-project-page.component';
const appRoutes: Routes = [
  {
    path: 'profile/:id',
    component: PublicProfilePageComponent
  },
  {
    path: 'portfolio/:id',
    component: PublicPortfolioPageComponent
  },
  {
    path: 'project/:studentid/:projectid',
    component: PublicProjectPageComponent
  } ,
  {
    path: 'lk',
    component: LkPageComponent,
    children: lkRoutes,
    canActivate: [AuthGuard]
  },
  {
        path: 'login',
        component: MainPageComponent
  },
    // otherwise redirect to home
  { path: '**', redirectTo: 'lk' }

];
//const lkmodulepath = lkPublicRoutes.concat(appRoutes);
//console.log(lkmodulepath);
export const routing = RouterModule.forRoot(appRoutes);
