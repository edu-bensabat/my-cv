import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "lightMode",
  hide: "",
  grid: "",
  scrolling: "",
  header: {colH1: '3', divHeader: 'justify-end'}
};

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

    toHidden(state) {
      state.hide = "hidden";
      state.grid = "";
    },

    offHidden(state) {
      state.hide = "";
      state.grid = "grid grid-cols-5";
    },
  },
});

export const modeActions = modeSlice.actions;
export const modeReducer = modeSlice.reducer;
