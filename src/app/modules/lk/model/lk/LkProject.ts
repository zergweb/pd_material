import { LkImage } from './LkImage';
import { LkProjectDoc } from './LkProjectDoc';
import { FakeDataService} from '../../services/fake-data.service';
export class LkProject {
  public ProjectId?: number;
  public Name?: string;
  public Date?: Date;
  public IsShow?: boolean;
  public  GitUrl?: string;
  public ShortDesc?: string;
  public LongDesc?: string;
  public Thumbnail: LkImage = new LkImage();
  public Gallery?: string;
  public ProjectDocs?: LkProjectDoc[];
  public PortfolioId?: number;
}
