import dayjs from 'dayjs';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { IHashTag } from 'app/shared/model/hash-tag.model';
import { IMention } from 'app/shared/model/mention.model';

export interface ITweet {
  id?: number;
  content?: string;
  pictureContentType?: string | null;
  picture?: string | null;
  createdOn?: dayjs.Dayjs | null;
  hashtag?: string | null;
  userProfile?: IUserProfile | null;
  hashtags?: IHashTag[] | null;
  mentions?: IMention[] | null;
}

export const defaultValue: Readonly<ITweet> = {};
