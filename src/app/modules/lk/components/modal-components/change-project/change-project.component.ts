import { Component, Inject , OnInit} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Project } from '../../../model/Project';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-project-modal',
  templateUrl: 'change-project.component.html',
  styleUrls: ['change-project.component.css'],
})
export class ChangeProjectComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChangeProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project) {
    
  
  }
  close(): void {
    this.dialogRef.close();
  }
  get changedProject(): Project {
    return {
      Name: this.form.controls['Name'].value,
      GitUrl: this.form.controls['Git'].value,
      ShortDesc: this.form.controls['ShortDesc'].value,
      LongDesc: this.form.controls['LongDesc'].value,
      ThumbnailUrl: this.data.ThumbnailUrl,
    }
  }
  ngOnInit() {
    this.form = this.fb.group({
      Name: new FormControl(this.data.Name),
      Git: new FormControl(this.data.GitUrl),
      ShortDesc: new FormControl(this.data.ShortDesc),
      LongDesc: new FormControl(this.data.LongDesc),
      ThumbnailUrl: new FormControl(this.data.ThumbnailUrl),
      IsShow: new FormControl(this.data.isShow)
    });
  }
}
