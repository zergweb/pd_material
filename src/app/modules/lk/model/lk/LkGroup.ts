import {LkSubjectTeacherGroup } from './LkSubjectTeacherGroup';
import { LkFacultySection } from './LkFacultySection';
export class LkGroup {
  public Id?: number;
  public FacultySection?: LkFacultySection;
  public Name?: string;
  public Subjects?: LkSubjectTeacherGroup[];
}
