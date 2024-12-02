import { createAsyncThunk } from "@reduxjs/toolkit";
import { createActionName } from "../../../util/redux";
import { loginAPI } from "../services/apiCall";
import { DOMAIN_NAME } from "../constants";

export const loginAction = createAsyncThunk(
  createActionName(DOMAIN_NAME, "login"),
  loginAPI,
);
