import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../services/fake-data.service';
import { Certificate} from '../../model/Certificate'
import { MatDialog } from '@angular/material/dialog';
import { AddImageModalComponent } from '../../components/modal-components/add-image-modal/add-image.component';
import { OpenImageComponent } from '../../components/modal-components/open-image/open-image.component';
import { ChangeImageComponent} from '../../components/modal-components/change-image/change-image.component';
import { FormBuilder } from '@angular/forms';
import { LkProjectDoc } from '../../model/lk/LkProjectDoc';
import { ReqHttpService } from '../../services/req-http.service';
import { StoreDataService } from '../../services/store-data.service';
@Component({
  selector: 'app-lk-addproject-page',
  templateUrl: './lk-addproject-page.component.html',
  styleUrls: ['./lk-addproject-page.component.css']
})
export class LkAddProjectPageComponent implements OnInit {

  public projectDoc = this.fb.group({
    Name: [],   
    DocUrl: [],
    Desc: []
  });

  public projectForm = this.fb.group({
  
    Name: [],
    Date: [new Date()],
    GitUrl: [],
    IsShow:[true],
    ShortDesc: [],
    LongDesc: [],
    Thumbnail: [],
    Gallery: [],
    ProjectDocs: [[]],
    PortfolioId:[this.store.CurrentStudent.Portfolio.Id]
  });

  constructor(private fb: FormBuilder,
    private httpser: ReqHttpService,
    private store: StoreDataService
  ) {
   
  }

  ngOnInit() {
    
  }
  AddProject() {
    this.httpser.addProjec(this.projectForm.value).subscribe(
      (d) => { console.log(d)},
      error => console.log(error)
    );
  }
  public Test() {
    console.log(this.projectForm.value);
  }
  public AddDoc() {
    this.projectForm.value['this.projectDoc.value'];
    this.projectForm.setValue({
      "ProjectDocs": this.projectForm.value['ProjectDocs'].push(this.projectDoc.value)
    });
  }
  public DelDoc(i: number) {
    console.log(this.projectForm.value);
    console.log(i);
    this.projectForm.setValue({
      "ProjectDocs": this.projectForm.value['ProjectDocs'].splice(i, 1)
    });
  }
}
