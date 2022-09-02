import { configureStore } from "@reduxjs/toolkit";
import { componentConfigReducer } from "./ComponentConfig";

const store = configureStore({
  reducer: { componentConfig: componentConfigReducer },
});

export default store;
