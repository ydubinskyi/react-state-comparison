import { UserDetails } from './user-details.interface';

export interface AuthResponse {
  jwt: string;
  user: UserDetails;
}
