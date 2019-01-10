import { Injectable, Predicate } from '@angular/core';
import { UserData } from '../model/UserData';
import { Project} from '../model/Project';
import { ProfileConfig } from '../model/ProfileConfig';
import { Person} from '../model/Person';
import { Certificate } from '../model/Certificate';
import { Teacher } from '../model/Teacher';
import { FakeDataService } from './fake-data.service';
import { Portfolio} from '../model/Portfolio';
@Injectable({ providedIn: 'root' })
export class PublicDataService {

  constructor(private fd: FakeDataService) { }

  public getUserData(id: number):UserData {
   return id == 111 ? this.fd.CurrentUserData() : null;
  }
  public getUserConfig(id: number): ProfileConfig {
    return id == 111 ? this.fd.CurrentUserProfileConfig() : null;
  }
  public getUserCertificates(id: number): Certificate[] {
    return id == 111 ? this.fd.UserCertificates() : null;
  }
  public getPortfolio(id: number): Portfolio {
    return id == 111 ? this.fd.getPortfolio() : null;
  }
}
