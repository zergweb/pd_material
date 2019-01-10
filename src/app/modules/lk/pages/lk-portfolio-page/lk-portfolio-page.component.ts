import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { FakeDataService } from '../../services/fake-data.service';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../model/Project';
import { AddProjectModalComponent } from '../../components/modal-components/add-project-modal/add-project.component';
import { ChangeProjectComponent } from '../../components/modal-components/change-project/change-project.component';
@Component({
  selector: 'app-lk-portfolio-page',
  templateUrl: './lk-portfolio-page.component.html',
  styleUrls: ['./lk-portfolio-page.component.css']
})
export class LkPortfolioPageComponent implements OnInit {
  public pageSize: number = 6;
  public projects: Project[];
  pageEvent: PageEvent;
  constructor(private fd: FakeDataService, public dialog: MatDialog) {
    
  }
  get currentProjects(): Project[] {
    if (this.pageEvent) {
      return this.projects.slice((this.pageEvent.pageIndex) * this.pageSize,
        (this.pageEvent.pageIndex+1) * this.pageSize)
    } else {
      return this.projects.slice(0, this.pageSize);
    }
    
  }

  ngOnInit() {
   
    this.projects = this.fd.AllProjects();
   
  }
  openAddProjectModalComponent(): void {
    let dialogRef = this.dialog.open(AddProjectModalComponent, {
      width: '500px', data: {}
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  openChangeProjectModalComponent(id: number): void {
    console.log(this.pageEvent);
    let dialogRef = this.dialog.open(ChangeProjectComponent, {
      width: '500px', data: this.projects[id]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.projects[id] = result; }

    });
  }
 

}
