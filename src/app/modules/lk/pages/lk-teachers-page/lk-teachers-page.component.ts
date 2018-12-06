import { Component, OnInit } from '@angular/core';
import { Teacher} from '../../model/Teacher';
import { FakeDataService} from '../../services/fake-data.service';
@Component({
  selector: 'app-lk-teachers-page',
  templateUrl: './lk-teachers-page.component.html',
  styleUrls: ['./lk-teachers-page.component.css']
})
export class LkTeachersPageComponent implements OnInit {
  public Teachers: Teacher[];
  constructor(private fd: FakeDataService) { }

  ngOnInit() {
    this.Teachers = this.fd.UserTeachers();
  }

}
