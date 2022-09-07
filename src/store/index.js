import { configureStore } from "@reduxjs/toolkit";
import { componentConfigReducer } from "./ComponentConfig";
import { modeReducer } from "./mode";

const store = configureStore({
  reducer: { componentConfig: componentConfigReducer, mode: modeReducer },
});

export default store;
