import { Routes, RouterModule } from '@angular/router';


import { LkPageComponent } from './modules/lk/pages/lk-page/lk-page.component';
import { LkModule } from './modules/lk/lk.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LkProfilePageComponent } from './modules/lk/pages/lk-profile-page/lk-profile-page.component';
import { lkRoutes } from './modules/lk/lk.routing';

const appRoutes: Routes = [
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

export const routing = RouterModule.forRoot(appRoutes);
