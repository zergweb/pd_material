import { Component, OnInit } from '@angular/core';
import { ReqHttpService } from '../../../services/req-http.service';
import { StoreDataService} from '../../../services/store-data.service';
import { LkPortfolio } from '../../../model/lk/LkPortfolio';
import { ProfileConfig } from '../../../model/ProfileConfig';
import { Project } from '../../../model/Project';
import { PublicDataService } from '../../../services/public-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Person} from '../../../model/Person';
import { Portfolio } from '../../../model/Portfolio';
import { LkProject } from '../../../model/lk/LkProject';
import { LkStudent} from '../../../model/lk/lkStudent';
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
  public Portfolio: LkPortfolio;
  public Student: LkStudent;

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
    private serv:ReqHttpService,
    public dialog: MatDialog,
    private store:StoreDataService
  ) {
    this.userId = this.activateRoute.snapshot.params['id'];
    console.log(this.activateRoute.snapshot.params);
    this.portfolio = this.fakedata.getPortfolio(this.userId);
    console.log(this.portfolio);
    if (this.portfolio == null) {
     // this.router.navigate(['']);
    } else {   
      this.projects = this.portfolio.Projects;
      this.user = this.portfolio.LkUser;
    }   
  }

  get currentProjects(): LkProject[] {
    if (this.pageEvent) {
      return this.Portfolio.Projects.slice((this.pageEvent.pageIndex) * this.pageSize,
        (this.pageEvent.pageIndex + 1) * this.pageSize)
    } else {
      return this.Portfolio.Projects.slice(0, this.pageSize);
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
    this.loadPortfolio();
    this.loadStudent()
  }
  public sideToggle() {
    this.sideIsOpen = !this.sideIsOpen;
    this.sideIsOpen ? this.sidewidth = '450px' : this.sidewidth = '100px';
    this.pageSize == 6 ? this.pageSize = 8 : this.pageSize = 6;
  }

  private loadPortfolio() {
    this.userId = this.activateRoute.snapshot.params['id'];
    this.serv.getPublicPortfolio(this.userId).subscribe(
      (r: LkPortfolio) => {
        console.log(r);
        r.Projects.forEach((x) => {
          x.Thumbnail == null ? x.Thumbnail = this.store.DefaultImage : 0;
        });
        this.Portfolio = r;
      },
      (er) => {
        console.log(er);
        this.loadPortfolio();
      }
    );
  }
  private loadStudent() {
    this.userId = this.activateRoute.snapshot.params['id'];
    this.serv.getStudent(this.userId).subscribe(
      (r: LkStudent) => {
        console.log(r);
        r.Thumbnail == null ? r.Thumbnail = this.store.DefaultImage : 0;
        this.Student = r;
      },
      (er) => {
        this.loadPortfolio();
      }
    );
  }
}
