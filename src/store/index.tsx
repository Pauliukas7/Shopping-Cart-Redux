import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";
import { uiSlice } from "./ui-slice";

export const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
