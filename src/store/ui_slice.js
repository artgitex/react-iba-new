import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isViewOnly: false, isInSettings: false, isInDetails: false },
  reducers: {
    setViewOnlySetting(state, action) {
      state.isViewOnly = action.payload;
    },
    setIsInSetting(state, action) {
        state.isInSettings = action.payload;
    },
    setIsInDetails(state, action) {
      state.isInDetails = action.payload;
  }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
