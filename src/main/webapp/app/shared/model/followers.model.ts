import dayjs from 'dayjs';
import { IUserProfile } from 'app/shared/model/user-profile.model';

export interface IFollowers {
  id?: number;
  since?: dayjs.Dayjs | null;
  follower?: IUserProfile | null;
  userProfile?: IUserProfile | null;
}

export const defaultValue: Readonly<IFollowers> = {};
