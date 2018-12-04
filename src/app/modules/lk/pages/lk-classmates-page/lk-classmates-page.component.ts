import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../services/fake-data.service';
import {Person} from '../../model/Person';

@Component({
  selector: 'app-lk-classmates-page',
  templateUrl: './lk-classmates-page.component.html',
  styleUrls: ['./lk-classmates-page.component.css']
})
export class LkClassmatesPageComponent implements OnInit {
  public Classmates: Person[];
  constructor(
    private fd:FakeDataService
  ) {

  }

  ngOnInit() {
    this.Classmates = this.fd.UserClassmates();
  }

}
