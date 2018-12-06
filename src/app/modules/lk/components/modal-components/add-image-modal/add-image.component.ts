import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Certificate } from '../../../model/Certificate';

@Component({
  selector: 'add-image-modal',
  templateUrl: 'add-image.component.html',
  styleUrls: ['add-image.component.css'],
})
export class AddImageModalComponent {
  public newCert: Certificate = {Name:"", ImgSrc:""};
  constructor(
    public dialogRef: MatDialogRef<AddImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Certificate) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
