import { combineSlices } from "@reduxjs/toolkit";
import { appSlice } from "./views/Root/store/slice";

export interface LazyLoadedSlices {}

export const rootReducer =
  combineSlices(appSlice).withLazyLoadedSlices<LazyLoadedSlices>();
