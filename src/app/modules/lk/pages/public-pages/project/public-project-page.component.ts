import { Component, OnInit } from '@angular/core';

import { PublicDataService } from '../../../services/public-data.service';
import { ReqHttpService } from '../../../services/req-http.service';
import { LkPublicProfile } from '../../../model/lk/LkPublicProfile';
import { LkProject } from '../../../model/lk/LkProject';
import { LkProjectDoc } from '../../../model/lk/LkProjectDoc';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StoreDataService } from '../../../services/store-data.service';

@Component({
  selector: 'public-project-page',
  templateUrl: './public-project-page.component.html',
  styleUrls: ['./public-project-page.component.css']
})
export class PublicProjectPageComponent implements OnInit {
  public Project: LkProject;
  public userId: number;
  public projectId: number;

  constructor(
    private activateRoute: ActivatedRoute,

    private serv: ReqHttpService,
    private store:StoreDataService
  ) {
    
  }
  private LoadProject(id: number) {    
    this.serv.getPublicProject(id).subscribe(
      (resp: LkProject) => {
        console.log(resp)
        this.Project = resp;      
      },
      (er) => {
        console.log(er);
        this.LoadProject(id);
      }
    );
  }


  ngOnInit() {
    this.userId = this.activateRoute.snapshot.params['studentid'];
    this.projectId = this.activateRoute.snapshot.params['projectid'];
    this.LoadProject(this.projectId);
    
  }

  get Date(): string {
    let t = this.Project.Date.toString().match(/\d{4}-\d{2}-\d{2}/)[0];
    if (t != null) {
      return t
    } else { return ""; }
  }
}
