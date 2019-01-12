import { LkStudent } from './lkStudent';
import { LkProfileConfig } from './LkProfileConfig';
import { LkCertificate} from './LkCertificate';
export class LkPublicProfile {
  public Student?: LkStudent;
  public Config?: LkProfileConfig;
  public Certificates?: LkCertificate[];
}
