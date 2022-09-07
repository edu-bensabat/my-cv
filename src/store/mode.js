import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "lightMode" };

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toLight(state) {
      state.mode = "lightMode";
    },

    toDark(state) {
      state.mode = "darkMode";
    },

    abc() {
      console.log("abc");
    },
  },
});

export const modeActions = modeSlice.actions;
export const modeReducer = modeSlice.reducer;
