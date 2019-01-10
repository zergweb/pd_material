import { LkImage } from './LkImage';
import { LkProjectDoc} from './LkProjectDoc';
export class LkProject {
  public Id?: number;
  public Name?: string;
  public Date?: Date;
  public IsShow?: boolean;
  public  GitUrl?: string;
  public ShortDesc?: string;
  public LongDesc?: string;
  public Thumbnail?: LkImage;
  public Gallery?: string;
  public ProjectDocs?: LkProjectDoc[];
  public PortfolioId?: number;
}
