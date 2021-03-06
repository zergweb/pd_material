import { Injectable, Predicate } from '@angular/core';
import { UserData } from '../model/UserData';
import { Project} from '../model/Project';
import { ProfileConfig } from '../model/ProfileConfig';
import { Person} from '../model/Person';
import { Certificate } from '../model/Certificate';
import { Teacher } from '../model/Teacher';
import { Portfolio} from '../model/Portfolio';
import { retry } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class FakeDataService {
  private Lorem: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla elit, ultricies ac interdum ut, tincidunt in tellus. Curabitur consequat sem eu felis auctor malesuada. Duis blandit finibus arcu, eu dignissim ipsum congue a. Nunc lorem nibh, cursus vitae lectus et, accumsan consectetur ante. Suspendisse gravida mattis lorem, et consequat ipsum consequat in. Fusce eleifend elit quam, quis ullamcorper mi tempus eget. Fusce tincidunt viverra lacus, a sagittis nulla convallis ut. Aenean at scelerisque nunc, in venenatis felis. Integer faucibus egestas sapien eu eleifend. Maecenas pretium neque eu auctor congue. Mauris gravida hendrerit purus, tincidunt tempus nunc venenatis a. Integer in sapien nec augue faucibus dictum ut vel purus.Curabitur finibus neque vitae magna venenatis bibendum.Donec lacus nibh, scelerisque quis pretium nec, pellentesque sit amet augue.In fringilla felis eget arcu semper, vitae convallis dui ullamcorper.Morbi iaculis nisl nec tempus dapibus.Duis laoreet nisi at nulla tempor dignissim.Integer quis lorem in ligula elementum sollicitudin nec eu dui.Proin quis dolor at nisl cursus dictum vel vitae turpis.Fusce sit amet viverra elit, id convallis diam.";
  public DefaultThumbnail: string = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164f594cfba%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164f594cfba%22%3E%3Crect%20width%3D%22348%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.678125%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  private fakeuser: UserData = {
    Id: 11111,
    FirstName: "Иван",
    SecondName: "Иванович",
    ThirdName: "Иванов",
    About: "что то обо мне",
    City: "Москва",
    ThumbnailSrc: this.DefaultThumbnail,
    Date: new Date("11/03/1997"),
    Faculty: "Инфорамционных технологий",
    Course: "2",
    FacultyDirection: "WEB",
    Group: "171-331",
    Skills: "C#, Asp.net, Angular"
  };
  private projectList: Project[] = [
    { Id: 1, Name: "Проект 1", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl:this.DefaultThumbnail, Url:"", isShow:true },
    { Id: 2, Name: "Проект 2", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true},
    { Id: 3, Name: "Проект 3", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: false },
    { Id: 4, Name: "Проект 4", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true},
    { Id: 5, Name: "Проект 5", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: false},
    { Id: 1, Name: "Проект 6", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 2, Name: "Проект 7", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 3, Name: "Проект 8", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 4, Name: "Проект 9", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 5, Name: "Проект 10", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 1, Name: "Проект 11", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 2, Name: "Проект 12", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 3, Name: "Проект 13", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 4, Name: "Проект 14", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true },
    { Id: 5, Name: "Проект 15", ShortDesc: "Краткое описание", LongDesc: this.Lorem, ThumbnailUrl: this.DefaultThumbnail, Url: "", isShow: true }
  ];
  private FakeUserProfileConfig: ProfileConfig = {
    Date: false,
    About: true,
    City: false,
    Skills: true,
    Certificates: true,
    Portfolio:true,
  }
  private Classmates: Person[] = [
    { FirstName: "Иван", LastName: "Иванов" , ThumbUrl:this.DefaultThumbnail},
    { FirstName: "Сидор", LastName: "Сидоров", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Петр", LastName: "Петров", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Николай", LastName: "Николаев", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Александр", LastName: "Александров", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Иван", LastName: "Иванов", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Сидор", LastName: "Сидоров", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Петр", LastName: "Петров", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Николай", LastName: "Николаев", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Иван", LastName: "Иванов", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Сидор", LastName: "Сидоров", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Петр", LastName: "Петров", ThumbUrl: this.DefaultThumbnail },
    { FirstName: "Николай", LastName: "Николаев", ThumbUrl: this.DefaultThumbnail }
  ];
  private Certificates: Certificate[] = [
    { ImgSrc: "http://servilon.ru/wp-content/uploads/2015/08/Oleg-N-Microsoft-Certifications-4.png", Name: "Сертификат 1", Desc: "Описание 1" },
    { ImgSrc: "https://www.eureca.ru/edu/about/documentcompletion/MS_Certificate.jpg", Name: "Сертификат 2", Desc: "Описание 2" },
    { ImgSrc: "https://vivt.ru/images/pages/vivt/certificate_mta.jpg", Name: "Сертификат 3", Desc: "Описание 3" },
    { ImgSrc: "https://796208.ssl.1c-bitrix-cdn.ru/upload/iblock/553/5532a24ef14615f20a937ddd155c91ce.jpg?1521298809104395", Name: "Сертификат 4", Desc: "Описание 4" },
  ];
  private Teachers: Teacher[] = [
    { FirstName: "Иван", LastName: "Иванов",SecondName:"Иванович", ThumbUrl: this.DefaultThumbnail , Subject:"Предмет 1"},
    { FirstName: "Сидор", LastName: "Сидоров", SecondName: "Сидорович", ThumbUrl: this.DefaultThumbnail, Subject: "Предмет 2" },
    { FirstName: "Петр", LastName: "Петров", SecondName: "Петрович", ThumbUrl: this.DefaultThumbnail, Subject: "Предмет 3" },
    { FirstName: "Николай", LastName: "Николаев", SecondName: "Николаевич", ThumbUrl: this.DefaultThumbnail, Subject: "Предмет 4" },
  ];
  private portfolio: Portfolio = {
    Projects: this.getPublicProjects(this.projectList),
    About: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla elit, ultricies ac interdum ut, tincidunt in tellus. Curabitur consequat sem eu felis auctor malesuada. Duis blandit finibus arcu, eu dignissim ipsum congue a. Nunc lorem nibh, cursus vitae lectus et, accumsan consectetur ante. Suspendisse gravida mattis lorem, et consequat ipsum consequat in.",
    LkUser: this.Classmates[0]
  };

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
   public AllProjects(): Project[] {
    return this.projectList;
   }
   public AddProject(project:Project): void {
    this.projectList.push(project);
  }
   public UserClassmates(): Person[] {
    return this.Classmates;
   }
   public UserCertificates(): Certificate[] {
    return this.Certificates;
   }
  public UserTeachers(): Teacher[] {
    return this.Teachers;
  }
  public getPortfolio(): Portfolio {
    return this.portfolio;
  }




  private getPublicProjects(projects: Project[]): Project[] {
    let publicProjects = new Array<Project>();
    for (let project of projects) {
      project.isShow ? publicProjects.push(project): null;   
    }
    return publicProjects;
  }
}
