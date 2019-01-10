import { Injectable, Predicate } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LkStudent } from '../model/lk/lkStudent';
import { LkProject } from '../model/lk/LkProject';
import {StoreDataService } from './store-data.service';
@Injectable({ providedIn: 'root' })
export class ReqHttpService {
  private serv = "https://localhost:44316/";
  private myHeaders = new HttpHeaders().set('crossDomain', 'true');
  constructor(private http: HttpClient) { }

 public getStudent(studid:number) {
   return this.http.post(this.serv + "getstudent/", { id: studid }, {headers:this.myHeaders}); 
 }
  public getProfileConfig(studid: number) {
    return this.http.post(this.serv + "getprofileconfig/", { id: studid }, { headers: this.myHeaders });
  }
  public getLastProjects(studid: number) {
    return this.http.post(this.serv + "getlastprojects/", { id: studid }, { headers: this.myHeaders });
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
    return this.http.post(this.serv + "addProject/", { NewProject: pr }, { headers: this.myHeaders });
  }
}
