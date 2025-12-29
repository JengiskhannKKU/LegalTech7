import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  isReady: boolean;
};

const initialState: AppState = {
  isReady: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setReady(state, action: PayloadAction<boolean>) {
      state.isReady = action.payload;
    },
  },
});

export const { setReady } = appSlice.actions;
export default appSlice.reducer;
