import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CalculSlice from "./Slice";
const reducer = combineReducers({
  calculB: CalculSlice,
});
const store = configureStore({ reducer });
export default store;
