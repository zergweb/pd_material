import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../services/fake-data.service';
import { UserData } from '../../model/UserData';
import { ProfileConfig } from '../../model/ProfileConfig';
import { retry } from '../../../../../../node_modules/rxjs/operators';
import { Project } from '../../model/Project';
@Component({
  selector: 'app-lk-profile-page',
  templateUrl: './lk-profile-page.component.html',
  styleUrls: ['./lk-profile-page.component.css'],
  host: {'class': 'row'}
})
export class LkProfilePageComponent implements OnInit {
  public data: UserData;
  public profileConfig: ProfileConfig;
  public lastProjects: Project[];
  public isChanged: boolean = false;
  constructor(private fakedata: FakeDataService) {
    this.data = fakedata.CurrentUserData();
    this.profileConfig = fakedata.CurrentUserProfileConfig();
    this.lastProjects = fakedata.LastProjects();
  
  }

  ChangeProfile() {
    this.isChanged = !this.isChanged;
  }
  ngOnInit() {
  }

}
