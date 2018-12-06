import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Certificate } from '../../../model/Certificate';
@Component({
  selector: 'open-image-modal',
  templateUrl: 'open-image.component.html',
  styleUrls: ['open-image.component.css'],
})
export class OpenImageComponent {
  constructor(
    public dialogRef: MatDialogRef<OpenImageComponent>,
    @Inject(MAT_DIALOG_DATA) public url:string) { }
  Close(): void {
    this.dialogRef.close();
  }
}
