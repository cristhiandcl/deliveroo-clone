import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./feautures/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
