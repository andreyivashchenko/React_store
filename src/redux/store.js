import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
  },
});
