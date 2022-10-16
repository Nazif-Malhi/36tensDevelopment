import { createReducer } from "@reduxjs/toolkit";

export const rootReducer = createReducer(
  { isAuth: false },
  {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  }
);
