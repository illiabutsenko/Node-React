import { configureStore } from "@reduxjs/toolkit";
import { CountReducer } from "./components/CounterRedux";

const store = configureStore({
  reducer: CountReducer,
});

export default store;
