import dayjs from 'dayjs';
import { IUserProfile } from 'app/shared/model/user-profile.model';

export interface IFollowing {
  id?: number;
  since?: dayjs.Dayjs | null;
  followed?: IUserProfile | null;
  userProfile?: IUserProfile | null;
}

export const defaultValue: Readonly<IFollowing> = {};
