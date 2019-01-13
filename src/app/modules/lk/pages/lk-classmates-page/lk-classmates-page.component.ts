import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../services/fake-data.service';
import {LkStudent} from '../../model/lk/lkStudent';
import { ReqHttpService } from '../../services/req-http.service';
import { StoreDataService } from '../../services/store-data.service';
@Component({
  selector: 'app-lk-classmates-page',
  templateUrl: './lk-classmates-page.component.html',
  styleUrls: ['./lk-classmates-page.component.css']
})
export class LkClassmatesPageComponent implements OnInit {
  public Classmates: LkStudent[];
  constructor(
    private store: StoreDataService,
    private serv:ReqHttpService
  ) {

  }

  ngOnInit() {
    this.loadClassmates();
  }
  private loadClassmates() {
    this.serv.getClassmates(this.store.CurrentStudent.Id).subscribe(
      (r:LkStudent[]) => {
        //console.log(r);
        r.forEach((x) => {
          x.Thumbnail == null ? x.Thumbnail = this.store.DefaultImage : 0;
        });
        this.Classmates = r;
      },
      (e) => {
        console.log(e)
      }
    );
  }
}
