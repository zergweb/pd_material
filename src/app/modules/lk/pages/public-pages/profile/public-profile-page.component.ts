import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../../services/fake-data.service';
import { UserData } from '../../../model/UserData';
import { ProfileConfig } from '../../../model/ProfileConfig';
import { Project } from '../../../model/Project';
import { PublicDataService } from '../../../services/public-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Certificate } from '../../../model/Certificate';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material';
import { OpenImageComponent } from '../../../components/modal-components/open-image/open-image.component';
@Component({
  selector: 'public-profile-page',
  templateUrl: './public-profile-page.component.html',
  styleUrls: ['./public-profile-page.component.css']
})
export class PublicProfilePageComponent implements OnInit {
  public userId: number;
  public data: UserData;
  public profileConfig: ProfileConfig;
  public certificates : Certificate[];
  public pageSize: number = 3;
  pageEvent: PageEvent;
  constructor(private fakedata: PublicDataService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.userId = this.activateRoute.snapshot.params['id'];
    this.data = this.fakedata.getUserData(this.userId);
    if (this.data == null) {
      this.router.navigate(['']);
    } else {
      this.profileConfig = this.fakedata.getUserConfig(this.userId);
      this.certificates = this.fakedata.getUserCertificates(this.userId);
    }   
  }
  get currentCertificates(): Certificate[] {
    if (this.pageEvent) {
      return this.certificates.slice((this.pageEvent.pageIndex) * this.pageSize,
        (this.pageEvent.pageIndex + 1) * this.pageSize)
    } else {
      return this.certificates.slice(0, this.pageSize);
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
    
  }

}
