import { createSlice } from "@reduxjs/toolkit";
import {
  ADMIN_ROLE,
  USER_ROLE,
  ADMIN_EMAIL,
  ADMIN_PASS,
} from "../constants/global";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, role: USER_ROLE },
  reducers: {
    login(state, action) {
      if (action.payload.email === ADMIN_EMAIL && action.payload.password === ADMIN_PASS) {
        state.role = ADMIN_ROLE;
      } else {
        state.role = USER_ROLE;
      }

      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.role = USER_ROLE;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
