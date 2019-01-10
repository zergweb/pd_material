import { LkStudentSkill } from './LkStudentSkill';
import { LkPortfolio } from './LkPortfolio';
import { LkImage } from './LkImage';
import { LkGroup } from './LkGroup';
import {LkProfileConfig } from './LkProfileConfig';
export class LkStudent{
  public Id?: number;
  public FirstName?: string;
  public SecondName?: string;
  public LastName?: string;
  public City?: string;
  public DOB?: Date;
  public Group?: LkGroup;
  public StudentSkills?: LkStudentSkill[];
  public Portfolio?: LkPortfolio;
  public Thumbnail?: LkImage;
  public ProfileUrl?: string;
  public Config?: LkProfileConfig;

}
