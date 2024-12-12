import { LoginRequest } from "../interfaces/Login";

export const loginAPI = async ({
  username,
  password,
  rememberMe,
}: LoginRequest) => {
  if (username && password) {
    return Promise.resolve({ token: "some token", rememberMe: !!rememberMe });
  } else {
    return Promise.reject(new Error("Invalid username or password"));
  }
};
