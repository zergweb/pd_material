import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FakeDataService } from '../../services/fake-data.service';
import { ReqHttpService } from '../../services/req-http.service';
import { StoreDataService} from '../../services/store-data.service';
import { UserData } from '../../model/UserData';
import { ProfileConfig } from '../../model/ProfileConfig';
import { Project } from '../../model/Project';
import { LkProfileConfig } from '../../model/lk/LkProfileConfig';
import { LkLastProjectItem} from '../../model/lk/LkLastProjectItem';
import { LkStudent } from '../../model/lk/lkStudent';
import { LkStudentSkill } from '../../model/lk/LkStudentSkill';
@Component({
  selector: 'app-lk-profile-page',
  templateUrl: './lk-profile-page.component.html',
  styleUrls: ['./lk-profile-page.component.css'],
  host: { 'class': 'row' }
})
export class LkProfilePageComponent implements OnInit {
  private UserId: number = 1;
  public data: UserData;
  public profileConfig: ProfileConfig;
  public lastProjects: Project[];
  public isChanged: boolean = false;
  public Student:LkStudent=this.store.CurrentStudent;
  public ProfileConfig: LkProfileConfig;
  public LastProjects: Project[] = this.store.LastProjects;
  public newSkillName: string;
  constructor(
    private fakedata: FakeDataService,
    private httpser: ReqHttpService,
    private store:StoreDataService
  ) {
    this.data = fakedata.CurrentUserData();
    this.profileConfig = fakedata.CurrentUserProfileConfig();
    this.lastProjects = fakedata.LastProjects();
  }
  public AddNewSkill() {
    console.log(this.newSkillName);
    if (this.newSkillName != null) {
      this.Student.StudentSkills.push({ Skill: { Name: this.newSkillName } });
    } 
  }
  ChangeProfile() {
    this.isChanged = !this.isChanged;
    console.log(this.Student);
  }
  UpdateStud() {
    this.isChanged = !this.isChanged;
    this.httpser.updateStud(this.Student).subscribe(
      () => { },
      error => console.log(error)
    );
  }
  ngOnInit() {
    //this.loadStud();
    //this.loadlastProjects();


    //if (this.ProfileConfig == null) {
    //  this.httpser.getProfileConfig(this.UserId).subscribe(
    //    (data:LkProfileConfig) => {
    //      this.ProfileConfig = data;
    //      console.log(this.ProfileConfig);
    //    },
    //    error => console.log(error)
    //  );
    //}

  }
  //private loadStud() {
  //  if (this.Student == null) {
  //    this.httpser.getStudent(this.UserId).subscribe(
  //      (data: LkStudent) => {
  //        console.log(data.DOB.toString());
  //        this.Student = data;
  //        console.log(this.Student);
  //      },
  //      (error) => {
  //        if (error.name == "HttpErrorResponse") {
  //          console.log(error);
  //          this.loadStud();
  //        }

  //      }
  //    );
  //  }
  //}
  //private loadlastProjects() {
  //  if (this.LastProjects == null) {
  //    this.httpser.getLastProjects(this.UserId).subscribe(
  //      (data: LkLastProjectItem[]) => {
  //        this.LastProjects = data;
  //        console.log(this.LastProjects);
  //      },
  //      (error) => {
  //        if (error.name == "HttpErrorResponse") {
  //          this.loadlastProjects();
  //          console.log(error);
  //        }
  //      }
  //    );
  //  }
  //}
}

