import { Component, OnInit } from '@angular/core';
import { Teacher} from '../../model/Teacher';
import { FakeDataService } from '../../services/fake-data.service';
import { ReqHttpService } from '../../services/req-http.service';
import { StoreDataService } from '../../services/store-data.service';
import { LkTeacher} from '../../model/lk/LkTeacher';
@Component({
  selector: 'app-lk-teachers-page',
  templateUrl: './lk-teachers-page.component.html',
  styleUrls: ['./lk-teachers-page.component.css']
})
export class LkTeachersPageComponent implements OnInit {
  public Teachers: LkTeacher[];
  constructor(
    private store: StoreDataService,
    private serv: ReqHttpService) { }

  ngOnInit() {
    this.loadTeachers();
  }
  private loadTeachers() {
    this.serv.getTeachers(this.store.CurrentStudent.Id).subscribe(
      (r: LkTeacher[]) => {
        r.forEach((x) => {
          x.Thumbnail == null ? x.Thumbnail = this.store.DefaultImage : 0;
        });
        this.Teachers = r;
      },
      (e) => { console.log(e) }
    );
  }
}
