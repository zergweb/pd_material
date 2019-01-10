import { Routes, RouterModule } from '@angular/router';

import {PublicProfilePageComponent } from './pages/public-pages/profile/public-profile-page.component';
import {PublicPortfolioPageComponent} from './pages/public-pages/portfolio/public-portfolio-page.component';

export const lkPublicRoutes: Routes = [
  {
     path: 'profile/:id',
    component: PublicProfilePageComponent 
  },
  {
    path: 'portfolio/:id',
    component: PublicPortfolioPageComponent
  } 
];

