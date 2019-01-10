import { Component, Inject , OnInit} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Project } from '../../../model/Project';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FakeDataService} from '../../../services/fake-data.service';
@Component({
  selector: 'add-project-modal',
  templateUrl: 'add-project.component.html',
  styleUrls: ['add-project.component.css'],
})
export class AddProjectModalComponent implements OnInit {
  public form: FormGroup;
  private DefaultThumbnail: string = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164f594cfba%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164f594cfba%22%3E%3Crect%20width%3D%22348%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.678125%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  constructor(
  private fakedata:FakeDataService,
  private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProjectModalComponent>,

  ) {
    this.form = this.fb.group({
      Name: new FormControl(''),
      Git: new FormControl(''),
      ShortDesc: new FormControl(''),
      LongDesc: new FormControl(''),
      ThumbnailUrl: new FormControl(''),
      IsShow: new FormControl('')
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addProject(): void {
    this.fakedata.AddProject(this.newProject);
    this.dialogRef.close();
  }
  ngOnInit() {
   
  }
  get newProject(): Project {
    return {
      Name: this.form.controls['Name'].value,
      GitUrl: this.form.controls['Git'].value,
      ShortDesc: this.form.controls['ShortDesc'].value,
      LongDesc: this.form.controls['LongDesc'].value,
      ThumbnailUrl: this.form.controls['ThumbnailUrl'].value == '' ? this.DefaultThumbnail : this.form.controls['ThumbnailUrl'].value,
    }
  }
}
