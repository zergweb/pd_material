import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../services/fake-data.service';
import { LkCertificate } from '../../model/lk/LkCertificate';
import { MatDialog } from '@angular/material/dialog';
import { AddImageModalComponent } from '../../components/modal-components/add-image-modal/add-image.component';
import { OpenImageComponent } from '../../components/modal-components/open-image/open-image.component';
import { ChangeImageComponent } from '../../components/modal-components/change-image/change-image.component';
import { ReqHttpService } from '../../services/req-http.service';
import { StoreDataService} from '../../services/store-data.service';

@Component({
  selector: 'app-lk-certificates-page',
  templateUrl: './lk-certificates-page.component.html',
  styleUrls: ['./lk-certificates-page.component.css']
})
export class LkCertificatesPageComponent implements OnInit {
  public Certificates: LkCertificate[];

  constructor(
    private fd: FakeDataService,
    public dialog: MatDialog,
    private serv: ReqHttpService,
    private store:StoreDataService
  ) {
   
  }
  private loadCertificates() {
    this.serv.getCertificates(this.store.CurrentStudent.Id).subscribe(
      (resp:LkCertificate[]) => {
        console.log(resp);
        this.Certificates = resp;
      },
      (error) => {
        console.log(error);
        this.loadCertificates();
      }
    )
  }
  ngOnInit() {
    this.loadCertificates();
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AddImageModalComponent, {
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

    let dialogRef = this.dialog.open(ChangeImageComponent, {
      width: '500px', data: this.Certificates[id]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.Certificates[id] = result;}
      
    });
  }
}
