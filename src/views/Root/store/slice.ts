import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  theme: "priority" | "main";
  language: string;
}

const initialState = {
  theme: "main",
  language: "en",
} satisfies AppState as AppState;

export const DOMAIN_NAME = "app";

export const appSlice = createSlice({
  name: DOMAIN_NAME,
  initialState,
  selectors: {
    getTheme: (state) => state.theme,
    getLanguage: (state) => state.language,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage, setTheme } = appSlice.actions;
export const { getLanguage, getTheme } = appSlice.selectors;
export const appReducer = appSlice.reducer;
export default appReducer;
