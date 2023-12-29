import { combineReducers } from "redux";
import globalReducer from "./globalSlice";
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  global: globalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
