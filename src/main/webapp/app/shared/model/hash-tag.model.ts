import { ITweet } from 'app/shared/model/tweet.model';
import { IMention } from 'app/shared/model/mention.model';

export interface IHashTag {
  id?: number;
  description?: string | null;
  tweets?: ITweet[] | null;
  mentions?: IMention[] | null;
}

export const defaultValue: Readonly<IHashTag> = {};
