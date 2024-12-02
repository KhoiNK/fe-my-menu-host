import { createSelector } from "@reduxjs/toolkit";
import { AuthenticationState, selectAuthenticationState } from "./slice";

export const selectToken = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => state?.token,
);

export const selectIsAuthed = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => state?.isAuthed,
);
export const selectLoading = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => state?.loading,
);
export const selectError = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => state?.error,
);
