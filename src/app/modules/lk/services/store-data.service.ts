import { Injectable, Predicate } from '@angular/core';
import { LkStudent} from '../model/lk/lkStudent';
import { Project } from '../model/Project';
@Injectable({ providedIn: 'root' })
export class StoreDataService {
  public CurrentStudent: LkStudent;
  public CurrentUserId = 1;
  public LastProjects: Project[];
;}
