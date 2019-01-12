import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { FakeDataService } from '../../services/fake-data.service';
import { ReqHttpService } from '../../services/req-http.service';
import { StoreDataService} from '../../services/store-data.service';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../model/Project';
import { LkProject} from '../../model/lk/LkProject';
import { LkPortfolio} from '../../model/lk/LkPortfolio';
import { AddProjectModalComponent } from '../../components/modal-components/add-project-modal/add-project.component';
import { ChangeProjectComponent } from '../../components/modal-components/change-project/change-project.component';
@Component({
  selector: 'app-lk-portfolio-page',
  templateUrl: './lk-portfolio-page.component.html',
  styleUrls: ['./lk-portfolio-page.component.css']
})
export class LkPortfolioPageComponent implements OnInit {
  public Portfolio: LkPortfolio;
  public pageSize: number = 6;

  
  pageEvent: PageEvent;
  constructor(private fd: FakeDataService,
    private dialog: MatDialog,
    private router: Router,
    private httpser: ReqHttpService,
    private store:StoreDataService
  ) {
    
  }
  
  public AddProject() {
    this.router.navigate(['lk/addproject']);
  }
  public ChangeProject(i: number) {
    this.router.navigate(['lk/changeproject/'+i]);
  }
  ngOnInit() {
    this.loadPortfolio();
  
   
  }
  public loadPortfolio() {
    if (this.store.Portfolio == null) {
      this.httpser.getPortfolio(this.store.CurrentStudent.Id).subscribe(
        (data: LkPortfolio) => {
          console.log(data);
          data.Projects.forEach((x) => {
            x.Thumbnail == null ? x.Thumbnail = this.store.DefaultImage : 0;
          });
          this.store.Portfolio = data;
          this.Portfolio = this.store.Portfolio;
        },
        (error) => {
          console.log(error);
          this.loadPortfolio();
        }
      );
    } else {
      this.Portfolio = this.store.Portfolio;
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
}
