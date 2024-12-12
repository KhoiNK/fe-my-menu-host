import { createSelector, createSlice, WithSlice } from "@reduxjs/toolkit";
import { loginAction } from "./actions";
import { RootState } from "../../../store";
import { DOMAIN_NAME } from "../constants";
import { rootReducer } from "../../../rootReducer";

export interface AuthenticationState {
  isAuthed: boolean;
  loading: boolean;
  token: string;
  error: string;
}

const initialState = {
  isAuthed: !!(localStorage.getItem("isAuthed") === "true"),
  token: "",
  loading: false,
  error: "",
} satisfies AuthenticationState as AuthenticationState;

export const authenticationSlice = createSlice({
  name: DOMAIN_NAME,
  initialState,
  reducers: {
    logout: (state: AuthenticationState) => {
      state.isAuthed = false;
      state.token = "";
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthed");
    },
  },
  extraReducers(builder) {
    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isAuthed = true;
      state.token = payload.token;
      localStorage.setItem("token", state.token);
      localStorage.setItem("isAuthed", state.isAuthed.toString());
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.loading = false;
      state.isAuthed = false;
      state.token = "";
    });
  },
});

declare module "../../../rootReducer" {
  export interface LazyLoadedSlices
    extends WithSlice<typeof authenticationSlice> {}
}

const injectedAutthenticationSlice = rootReducer.inject(authenticationSlice);

export const selectAuthenticationState = injectedAutthenticationSlice.selector(
  (state) => state.authentication,
);

selectAuthenticationState({
  authentication: { token: "", isAuthed: false, loading: false, error: "" },
  app: { language: "en", theme: "main" },
});

export const { logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
