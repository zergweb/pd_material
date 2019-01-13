import { Injectable, Predicate } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LkStudent } from '../model/lk/lkStudent';
import { LkProject } from '../model/lk/LkProject';
import { LkPublicProfile} from '../model/lk/LkPublicProfile';
import {StoreDataService } from './store-data.service';
@Injectable({ providedIn: 'root' })
export class ReqHttpService {
  private serv = "http://pd-api.std-267.ist.mospolytech.ru/";
  private myHeaders = new HttpHeaders().set('crossDomain', 'true');
  constructor(private http: HttpClient) { }

  public getStudent(studid:number) {
   return this.http.post(this.serv + "getstudent/", { Id: studid }, {headers:this.myHeaders}); 
  }
  public getClassmates(studid: number) {
    return this.http.post(this.serv + "getClassmates/", { Id: studid }, { headers: this.myHeaders });
  }
  public getTeachers(studid: number) {
    return this.http.post(this.serv + "getTeachers/", { Id: studid }, { headers: this.myHeaders });
  }
  public getPortfolio(studid: number) {
    return this.http.post(this.serv + "getPortfolio/", { UserId: studid }, { headers: this.myHeaders });
  }
  public getProfileConfig(studid: number) {
    return this.http.post(this.serv + "getprofileconfig/", { Id: studid }, { headers: this.myHeaders });
  }
  public getLastProjects(studid: number) {
    return this.http.post(this.serv + "getlastprojects/", { Id: studid }, { headers: this.myHeaders });
  }
  public getAllFaculties() {
    return this.http.post(this.serv + "getallfaculties/", { headers: this.myHeaders });
  }
  public getCustomStudentList(model) {
    return this.http.post(this.serv + "selectStudents/", {selectModel:model},{ headers: this.myHeaders });
  }
  public updateStud(stud: LkStudent) {
    return this.http.post(this.serv + "updatestudent/", { stud: stud}, { headers: this.myHeaders });
  }
  public addProjec(pr: LkProject) {
    return this.http.post(this.serv + "addProject/", { Project: pr }, { headers: this.myHeaders });
  }
  public getProject(ProjectId: number) {
    return this.http.post(this.serv + "getProject/", { UserId: ProjectId }, { headers: this.myHeaders });
  }
  public getPublicProject(ProjectId: number) {
    return this.http.post(this.serv + "getProject/", { UserId: ProjectId }, { headers: this.myHeaders });
  }
  public updateProject(project: LkProject) {
    return this.http.put(this.serv + "updateProject/", { Project: project }, { headers: this.myHeaders });
  }
  public getCertificates(Id: number) {
    return this.http.post(this.serv + "getCertificates/", { UserId: Id }, { headers: this.myHeaders });
  }
  public getPublicProfile(Id: number) {
    return this.http.post(this.serv + "getProfile/", { Id: Id }, { headers: this.myHeaders });
  }
  public getPublicPortfolio(Id: number) {
    return this.http.post(this.serv + "getPublicPortfolio/", { Id: Id }, { headers: this.myHeaders });
  }
}
