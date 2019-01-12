import { Routes, RouterModule } from '@angular/router';

import {PublicProfilePageComponent } from './pages/public-pages/profile/public-profile-page.component';
import {PublicPortfolioPageComponent} from './pages/public-pages/portfolio/public-portfolio-page.component';
import { PublicProjectPageComponent} from './pages/public-pages/project/public-project-page.component';
export const lkPublicRoutes: Routes = [
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
  } 
  
];

