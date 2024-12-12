export interface LoginRequest {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginForm {
  countryCode: string;
  username: string;
  password: string;
  rememberMe: boolean;
}
