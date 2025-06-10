import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-slice";
import { themeReducer } from "./theme-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
