import { Routes, RouterModule } from '@angular/router';

import { LkProfilePageComponent } from './pages/lk-profile-page/lk-profile-page.component';
import { LkClassmatesPageComponent } from './pages/lk-classmates-page/lk-classmates-page.component';
import { LkPortfolioPageComponent } from './pages/lk-portfolio-page/lk-portfolio-page.component';
import { LkTeachersPageComponent } from './pages/lk-teachers-page/lk-teachers-page.component';
import { LkCertificatesPageComponent } from './pages/lk-certificates-page/lk-certificates-page.component';
import { LkSearchPageComponent } from './pages/lk-search-page/lk-search-page.component';


export const lkRoutes: Routes = [
  {
    path: '',
    component: LkProfilePageComponent
  },
  {
    path: 'profile',
    component: LkProfilePageComponent
  },
    {
      path: 'classmates',
      component: LkClassmatesPageComponent 
    },
  {
    path: 'portfolio',
    component: LkPortfolioPageComponent
  },
  {
    path: 'teachers',
    component: LkTeachersPageComponent
  },
  {
    path: 'certificates',
    component: LkCertificatesPageComponent
  },
  {
    path: 'search',
    component: LkSearchPageComponent
  },
    { path: ' ', redirectTo: 'profile' }
];

