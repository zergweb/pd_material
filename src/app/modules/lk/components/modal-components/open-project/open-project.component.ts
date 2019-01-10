import { Component, Inject , OnInit} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Project } from '../../../model/Project';

@Component({
  selector: 'open-project-modal',
  templateUrl: 'open-project.component.html',
  styleUrls: ['open-project.component.css'],
})
export class OpenProjectComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OpenProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project) {
     
  }
  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }
}
