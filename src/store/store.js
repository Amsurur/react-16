import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducer/TodoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
