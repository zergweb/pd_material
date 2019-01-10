import { Component, OnInit } from '@angular/core';
import { ReqHttpService } from '../../services/req-http.service';
import { StoreDataService } from '../../services/store-data.service';
import { UserData } from '../../model/UserData';
import { ProfileConfig } from '../../model/ProfileConfig';
import { Project } from '../../model/Project';
import { LkProfileConfig } from '../../model/lk/LkProfileConfig';
import { LkLastProjectItem } from '../../model/lk/LkLastProjectItem';
import { LkStudent } from '../../model/lk/lkStudent';
@Component({
  selector: 'app-lk-page',
  templateUrl: './lk-page.component.html',
  styleUrls: ['./lk-page.component.css']
})
export class LkPageComponent implements OnInit {
  public UserId = 1;
  constructor(private httpser: ReqHttpService,
    public store: StoreDataService) { }

  ngOnInit() {
    this.loadStud();
    this.loadlastProjects();
  }
  private loadStud() {
    if (this.store.CurrentStudent == null) {
      this.httpser.getStudent(this.UserId).subscribe(
        (data: LkStudent) => {
          console.log(data.DOB.toString());
          this.store.CurrentStudent = data;
          console.log(this.store.CurrentStudent);
        },
        (error) => {
          if (error.name == "HttpErrorResponse") {
            console.log(error);
            this.loadStud();
          }

        }
      );
    }
  }
  private loadlastProjects() {
    if (this.store.LastProjects == null) {
      this.httpser.getLastProjects(this.UserId).subscribe(
        (data: LkLastProjectItem[]) => {
          this.store.LastProjects = data;
          console.log(this.store.LastProjects);
        },
        (error) => {
          if (error.name == "HttpErrorResponse") {
            this.loadlastProjects();
            console.log(error);
          }
        }
      );
    }
  }

}
