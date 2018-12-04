import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { LkPageComponent } from './pages/lk-page/lk-page.component';
import { LkSidebarComponent} from './components/lk-sidebar/lk-sidebar.component';
import { LkProfilePageComponent } from './pages/lk-profile-page/lk-profile-page.component';
import { LkClassmatesPageComponent } from './pages/lk-classmates-page/lk-classmates-page.component';
import { LkPortfolioPageComponent } from './pages/lk-portfolio-page/lk-portfolio-page.component';
import { LkTeachersPageComponent } from './pages/lk-teachers-page/lk-teachers-page.component';
import { LkCertificatesPageComponent } from './pages/lk-certificates-page/lk-certificates-page.component';
import { LkSearchPageComponent } from './pages/lk-search-page/lk-search-page.component';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.components';
import { ModalComponent } from './components/modal/modal.component';
import { SafePipe} from './shared/pipes/SafePipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    MatSlideToggleModule

  ],
  declarations: [
    LkPageComponent,
    LkSidebarComponent,
    LkProfilePageComponent,
    LkClassmatesPageComponent,
    LkPortfolioPageComponent,
    LkTeachersPageComponent,
    LkCertificatesPageComponent,
    LkSearchPageComponent,
    PageHeaderComponent,
    ModalComponent,
    SafePipe
  ],
  providers: [

  ],
  exports: [
    LkPageComponent,
    
  ],
  bootstrap: [LkPageComponent],
  
})
export class LkModule { }
