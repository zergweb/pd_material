import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../services/fake-data.service';
import {Certificate} from '../../model/Certificate'
import { MatDialog } from '@angular/material/dialog';
import { AddImageModalComponent } from '../../components/modal-components/add-image-modal/add-image.component';
import { OpenImageComponent } from '../../components/modal-components/open-image/open-image.component';
import { ChangeImageComponent} from '../../components/modal-components/change-image/change-image.component';
@Component({
  selector: 'app-lk-certificates-page',
  templateUrl: './lk-certificates-page.component.html',
  styleUrls: ['./lk-certificates-page.component.css']
})
export class LkCertificatesPageComponent implements OnInit {
  public Certificates: Certificate[];

  constructor(private fd: FakeDataService, public dialog: MatDialog) {
   
  }

  ngOnInit() {
    this.Certificates = this.fd.UserCertificates();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddImageModalComponent, {
      width: '500px', data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
  openImage(url:string): void {
    const dialogRef = this.dialog.open(OpenImageComponent, {
      maxWidth:'60%', data:url
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  changeImage(id: number): void {

    const dialogRef = this.dialog.open(ChangeImageComponent, {
      width: '500px', data: this.Certificates[id]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.Certificates[id] = result;}
      
    });
  }
}
