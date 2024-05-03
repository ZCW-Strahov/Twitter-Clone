import { IUser } from 'app/shared/model/user.model';

export interface IUserProfile {
  id?: number;
  fname?: string | null;
  lname?: string | null;
  handle?: string | null;
  user?: IUser | null;
}

export const defaultValue: Readonly<IUserProfile> = {};
