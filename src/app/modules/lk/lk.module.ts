import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LkPageComponent } from './pages/lk-page/lk-page.component';
import { LkSidebarComponent } from './components/lk-sidebar/lk-sidebar.component';
import { LkProjectPageComponent} from './pages/lk-project-page/lk-project-page.component';
import { LkProfilePageComponent } from './pages/lk-profile-page/lk-profile-page.component';
import { LkClassmatesPageComponent } from './pages/lk-classmates-page/lk-classmates-page.component';
import { LkPortfolioPageComponent } from './pages/lk-portfolio-page/lk-portfolio-page.component';
import { LkTeachersPageComponent } from './pages/lk-teachers-page/lk-teachers-page.component';
import { LkCertificatesPageComponent } from './pages/lk-certificates-page/lk-certificates-page.component';
import { LkSearchPageComponent } from './pages/lk-search-page/lk-search-page.component';
import { PublicProfilePageComponent } from './pages/public-pages/profile/public-profile-page.component';
import { PublicPortfolioPageComponent } from './pages/public-pages/portfolio/public-portfolio-page.component';
import { PublicProjectPageComponent } from './pages/public-pages/project/public-project-page.component';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.components';
import { ModalComponent } from './components/modal/modal.component';
import { SafePipe } from './shared/pipes/SafePipe';
import { AddImageModalComponent} from './components/modal-components/add-image-modal/add-image.component';
import { OpenImageComponent } from './components/modal-components/open-image/open-image.component';
import { OpenProjectComponent } from './components/modal-components/open-project/open-project.component';
import { ChangeImageComponent } from './components/modal-components/change-image/change-image.component';
import { AddProjectModalComponent} from './components/modal-components/add-project-modal/add-project.component';
import { ChangeProjectComponent} from './components/modal-components/change-project/change-project.component'
import { PublicDataService } from './services/public-data.service';
import { FakeDataService } from './services/fake-data.service';
import { ReqHttpService } from './services/req-http.service';
import { StoreDataService} from './services/store-data.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule
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
    PublicProfilePageComponent,
    PublicPortfolioPageComponent,
    PublicProjectPageComponent,
    LkProjectPageComponent,
    PageHeaderComponent,
    ModalComponent,
    AddImageModalComponent,
    OpenImageComponent,
    OpenProjectComponent ,
    ChangeImageComponent,
    AddProjectModalComponent,
    ChangeProjectComponent,
    SafePipe
  ],
  entryComponents: [
    AddImageModalComponent,
    OpenImageComponent,
    OpenProjectComponent ,
    ChangeImageComponent,
    AddProjectModalComponent,
    ChangeProjectComponent,],
  providers: [
    FakeDataService, PublicDataService, ReqHttpService, StoreDataService
  ],
  exports: [
    LkPageComponent,
    
  ],
  bootstrap: [LkPageComponent],
  
})
export class LkModule { }
