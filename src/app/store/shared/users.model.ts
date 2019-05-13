export interface JwtResponse {
  user: {
    id: number;
    firstName: string;
    secondName: string;
    email: string;
    phone: string;
    access_token: string;
    expires_in: number;
  };
}
