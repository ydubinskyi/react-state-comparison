export interface UserDetails {
  id: number;
  blocked: boolean;
  confirmed: boolean;
  email: string;
  username: string;
  created_at: string;
  updated_at: string;
  provider: string;
  role: { id: number; name: string; description: string };
}
