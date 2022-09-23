import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./card-slice";
import authSlice from "./auth-slice";
import uiSlice from "./ui_slice";

const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
