import { ITweet } from 'app/shared/model/tweet.model';
import { IHashTag } from 'app/shared/model/hash-tag.model';

export interface IMention {
  id?: number;
  content?: string | null;
  pictureContentType?: string | null;
  picture?: string | null;
  tweets?: ITweet[] | null;
  hashtags?: IHashTag[] | null;
}

export const defaultValue: Readonly<IMention> = {};
