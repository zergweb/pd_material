import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Certificate } from '../../../model/Certificate';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-image-modal',
  templateUrl: 'change-image.component.html',
  styleUrls: ['change-image.component.css'],
})
export class ChangeImageComponent {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChangeImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Certificate) {
    this.form = fb.group({
      Name: new FormControl(data.Name),
      Desc: new FormControl(data.Desc)
    });
    console.log(this.form);
  }
  close(): void {
    this.dialogRef.close();
  }
  get newCert(): Certificate {
    return {
      Name: this.form.controls['Name'].value,
      Desc: this.form.controls['Desc'].value,
      ImgSrc: this.data.ImgSrc
    }
  }
}
