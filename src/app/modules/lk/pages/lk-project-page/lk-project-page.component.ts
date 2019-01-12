import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../services/fake-data.service';
import { Certificate} from '../../model/Certificate'
import { MatDialog } from '@angular/material/dialog';
import { AddImageModalComponent } from '../../components/modal-components/add-image-modal/add-image.component';
import { OpenImageComponent } from '../../components/modal-components/open-image/open-image.component';
import { ChangeImageComponent} from '../../components/modal-components/change-image/change-image.component';
import { FormBuilder } from '@angular/forms';
import { LkProjectDoc } from '../../model/lk/LkProjectDoc';
import { LkProjectPage} from '../../model/lk/LkProjectPage';
import { ActivatedRoute } from '@angular/router';
import { ReqHttpService } from '../../services/req-http.service';
import { StoreDataService } from '../../services/store-data.service';
import { MatSnackBar } from '@angular/material';
import { LkProject } from '../../model/lk/LkProject';
@Component({
  selector: 'app-lk-project-page',
  templateUrl: './lk-project-page.component.html',
  styleUrls: ['./lk-project-page.component.css']
})
export class LkProjectPageComponent implements OnInit {
  public Page: LkProjectPage;
  public projectDoc = this.fb.group({
    Id:[],
    DocName: [],   
    DocUrl: [],
    Desc: [],
   File:[]
  });
  public projectForm = this.fb.group({
    ProjectId:[],
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
  public IsChange: boolean = this.activateRoute.snapshot.params['id'] == null;
  constructor(private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private httpser: ReqHttpService,
    private store: StoreDataService,
    public snackBar: MatSnackBar
  ) {
   
  }

  ngOnInit() {
   this.ChangeOrAdd();
  }
  public openSnackBar() {
    this.snackBar.open("Данные обновленны","Закрыть" ,{
      duration: 500,
    });
  }
  public ChangeOrAdd() {
    console.log("change");
    if (this.IsChange) {
      this.Page = {
        Title: "Добавление нового проекта",
        EventButtonName: "Создать новый проект",
        SnackTitle:"Проект добавлен"
      }
    } else {
      this.Page = {
        Title: "Редактирование проекта",
        EventButtonName: "Сохранить имзенения",
        SnackTitle: "Изменения сохраненны"
      };
      this.LoadProject(this.activateRoute.snapshot.params['id']);
    }
  }
 public MainButtonEvent() {
   this.IsChange ? this.AddProject() : this.UpdateProject();
  }
  private LoadProject(id:number) {
    this.httpser.getProject(id).subscribe((responce:LkProject) => {
      this.projectForm.patchValue({
        ProjectId:responce.ProjectId,
        Name: responce.Name,
        Date: responce.Date,
        GitUrl: responce.GitUrl,
        IsShow: responce.IsShow,
        ShortDesc: responce.ShortDesc,
        LongDesc: responce.LongDesc,
        Thumbnail: responce.Thumbnail,
        Gallery: responce.Gallery,
        ProjectDocs: responce.ProjectDocs
      });
      console.log(this.projectForm.value);
    },
      (error)=>{console.log(error)})
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
  private AddProject() {
    this.httpser.addProjec(this.projectForm.value).subscribe(
      () => { this.openSnackBar()},
      error => console.log(error)
    );
  }
  private UpdateProject() {
    this.httpser.updateProject(this.projectForm.value).subscribe(
      () => { this.openSnackBar() },
      error => console.log(error)
    );
  }
}
