import { LkFaculty} from '../../model/lk/LkFaculty';
import { LkFacultySection} from '../../model/lk/LkFacultySection';
export class LkStudentSelectionModel {
  public  FirstName?: string;
  public  SecondName?: string;
  public  LastName?: string;
  public  City?: string;
  public  DOBstart?: Date
  public  DOBend?: Date;
  public  Groups?: string[];
  public  SubjectNames?: string[];
  public  TeacherNames?: string[];
  public  Faculties?: LkFaculty[];
  public FacultySection?: LkFacultySection;
  public Skills?: string;
}
