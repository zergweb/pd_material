import { Injectable } from '@angular/core';
import { UserData } from '../model/UserData';
import { Project} from '../model/Project';
import { ProfileConfig } from '../model/ProfileConfig';
import { Person} from '../model/Person';

@Injectable({ providedIn: 'root' })
export class FakeDataService {
  private fakeuser: UserData = {
    Id: 11111,
    FirstName: "Иван",
    SecondName: "Иванович",
    ThirdName: "Иванов",
    About: "что то обо мне",
    City: "Москва",
    ThumbnailSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164f594cfba%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164f594cfba%22%3E%3Crect%20width%3D%22348%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.678125%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    Date: new Date("11/03/1997"),
    Faculty: "Инфорамционных технологий",
    Course: "2",
    FacultyDirection: "WEB",
    Group: "171-331",
    Skills: "C#, Asp.net, Angular"
  };
  private projectList: Project[] = [
    { Id: 1, Name: "Проект 1", ShortDesc: "Краткое описание" },
    { Id: 2, Name: "Проект 2", ShortDesc: "Краткое описание" },
    { Id: 3, Name: "Проект 3", ShortDesc: "Краткое описание" },
    { Id: 4, Name: "Проект 4", ShortDesc: "Краткое описание" },
    { Id: 5, Name: "Проект 5", ShortDesc: "Краткое описание" }
  ];
  private FakeUserProfileConfig: ProfileConfig = {
    About: true,
    City: false,
    Skills:true
  }
  private Classmates: Person[] = [
    { FirstName: "Иван", LastName: "Иванов" },
    { FirstName: "Сидор", LastName: "Сидоров" },
    { FirstName: "Петр", LastName: "Петров" },
    { FirstName: "Николай", LastName: "Николаев" },
    { FirstName: "Александр", LastName: "Александров" },
     { FirstName: "Иван", LastName: "Иванов" },
    { FirstName: "Сидор", LastName: "Сидоров" },
    { FirstName: "Петр", LastName: "Петров" },
    { FirstName: "Николай", LastName: "Николаев" },
    { FirstName: "Иван", LastName: "Иванов" },
    { FirstName: "Сидор", LastName: "Сидоров" },
    { FirstName: "Петр", LastName: "Петров" },
    { FirstName: "Николай", LastName: "Николаев" }
  ];


    constructor() {      
    }

   public CurrentUserData(): UserData {   
    return this.fakeuser;
  }
   public CurrentUserProfileConfig(): ProfileConfig {
    return this.FakeUserProfileConfig;
   }
   public LastProjects(): Project[] {
      return this.projectList.slice(-3);
   }
   public UserClassmates(): Person[] {
    return this.Classmates;
  }

}
