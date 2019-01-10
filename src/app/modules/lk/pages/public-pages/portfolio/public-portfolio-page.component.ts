import { Component, OnInit } from '@angular/core';


import { ProfileConfig } from '../../../model/ProfileConfig';
import { Project } from '../../../model/Project';
import { PublicDataService } from '../../../services/public-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Person} from '../../../model/Person';
import {Portfolio } from '../../../model/Portfolio';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material';
import { OpenProjectComponent} from '../../../components/modal-components/open-project/open-project.component';
import { OpenImageComponent } from '../../../components/modal-components/open-image/open-image.component';
@Component({
  selector: 'public-profile-page',
  templateUrl: './public-portfolio-page.component.html',
  styleUrls: ['./public-portfolio-page.component.css']
})
export class PublicPortfolioPageComponent implements OnInit {
  public userId: number;
  public portfolio: Portfolio;
  public profileConfig: ProfileConfig;
  public user: Person;
  public projects : Project[];
  public pageSize: number = 6;
  public sidewidth = '450px';
  public sideIsOpen = true;
  pageEvent: PageEvent;
  constructor(private fakedata: PublicDataService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.userId = this.activateRoute.snapshot.params['id'];
    this.portfolio = this.fakedata.getPortfolio(this.userId);
    console.log(this.portfolio);
    if (this.portfolio == null) {
      this.router.navigate(['']);
    } else {   
      this.projects = this.portfolio.Projects;
      this.user = this.portfolio.LkUser;
    }   
  }
  get currentProjects(): Project[] {
    if (this.pageEvent) {
      return this.projects.slice((this.pageEvent.pageIndex) * this.pageSize,
        (this.pageEvent.pageIndex + 1) * this.pageSize)
    } else {
      return this.projects.slice(0, this.pageSize);
    }

  }
  openProject(projectId: number): void {
    const dialogRef = this.dialog.open(OpenProjectComponent, {
      maxWidth: '80%', data: this.projects[projectId]
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  ngOnInit() {
    
  }
  public sideToggle() {
    this.sideIsOpen = !this.sideIsOpen;
    this.sideIsOpen ? this.sidewidth = '450px' : this.sidewidth = '100px';
 }
}