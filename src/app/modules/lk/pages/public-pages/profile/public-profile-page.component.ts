import { Component, OnInit } from '@angular/core';

import { PublicDataService } from '../../../services/public-data.service';
import { ReqHttpService } from '../../../services/req-http.service';
import { LkPublicProfile } from '../../../model/lk/LkPublicProfile';
import { LkCertificate} from '../../../model/lk/LkCertificate';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {StoreDataService } from '../../../services/store-data.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material';
import { OpenImageComponent } from '../../../components/modal-components/open-image/open-image.component';
@Component({
  selector: 'public-profile-page',
  templateUrl: './public-profile-page.component.html',
  styleUrls: ['./public-profile-page.component.css']
})
export class PublicProfilePageComponent implements OnInit {
  public Profile: LkPublicProfile;
  public userId: number;
  public pageSize: number = 3;
  public pageEvent: PageEvent;
  constructor(private fakedata: PublicDataService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private serv: ReqHttpService,
    private store:StoreDataService
  ) {
    this.userId = this.activateRoute.snapshot.params['id'];
    //this.data = this.fakedata.getUserData(this.userId);
    //if (this.data == null) {
    //  this.router.navigate(['']);
    //} else {
    //  this.profileConfig = this.fakedata.getUserConfig(this.userId);
    //  this.certificates = this.fakedata.getUserCertificates(this.userId);
    //}   
  }
  private LoadProfile(id: number) {
    
    this.serv.getPublicProfile(id).subscribe(
      (resp: LkPublicProfile) => {
        resp.Student.Thumbnail == null ? resp.Student.Thumbnail = this.store.DefaultImage : 0;
        this.Profile = resp;      
      },
      (er) => {
        console.log(er);
        this.LoadProfile(id);
      }
    );
  }
  get currentCertificates(): LkCertificate[] {
    if (this.pageEvent) {
      return this.Profile.Certificates.slice((this.pageEvent.pageIndex) * this.pageSize,
        (this.pageEvent.pageIndex + 1) * this.pageSize)
    } else {
      return this.Profile.Certificates.slice(0, this.pageSize);
    }

  }
  openImage(url: string): void {
    const dialogRef = this.dialog.open(OpenImageComponent, {
      maxWidth: '60%', data: url
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  ngOnInit() {
    this.userId = this.activateRoute.snapshot.params['id'];
    this.LoadProfile(this.userId);
    
  }
  test() {
    console.log(this.DOB);
  }
  get DOB(): string{
    let t = this.Profile.Student.DOB.toString().match(/\d{4}-\d{2}-\d{2}/)[0];
    if (t != null) {
      return t
    } else { return "";}
  }
 
}
