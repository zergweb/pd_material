import { Component, OnInit } from '@angular/core';
import { LkStudentSelectionModel} from '../../model/lk/LkStudentSelectionModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReqHttpService } from '../../services/req-http.service';
import { LkFaculty } from '../../model/lk/LkFaculty';
import { LkStudent} from '../../model/lk/lkStudent';

@Component({
  selector: 'app-lk-search-page',
  templateUrl: './lk-search-page.component.html',
  styleUrls: ['./lk-search-page.component.css']
})
export class LkSearchPageComponent implements OnInit {
  public Persons: string[] = ["Преподователь", "Студент"];
  public selectForm: FormGroup;
  public httpForm: FormGroup;
  public Faculties: LkFaculty[];
  public FacucltyForQuery: LkFaculty;
  public Students: LkStudent[];
  constructor(private httpser: ReqHttpService) {
    
  }

  get isStudent() {
    return this.selectForm.value["selectPerson"] == "Студент" ? true : false;
  }
  get CurrentFaculty():LkFaculty {
    return this.httpForm.value["Faculties"];
  }
  public Test() {
    console.log(this.httpForm.value);
    this.httpser.getCustomStudentList(this.httpForm.value).subscribe(
      (data:LkStudent[]) => {
        this.Students = data;
        console.log(data) },
      error => console.log(error)
    );
  }
  ngOnInit() {
    this.loadFaculties();
    this.selectForm = new FormGroup({
      "selectPerson": new FormControl('', Validators.required)
    });
    this.httpForm = new FormGroup({

      "FirstName": new FormControl(),
      "LastName": new FormControl(),
      "City": new FormControl(),
      "DOBstart": new FormControl(),
      "DOBend": new FormControl(),
      "Groups": new FormControl(),
      "Faculties": new FormControl(),
      "FacultySections": new FormControl(),
      "Skills": new FormControl()
    });
   
  }
  private loadFaculties() {
    if (this.Faculties == null) {
      this.httpser.getAllFaculties().subscribe(
        (data:LkFaculty[]) => {
          this.Faculties = data;
          console.log(this.Faculties) },
        error => console.log(error)
      );
    }
  }
}
