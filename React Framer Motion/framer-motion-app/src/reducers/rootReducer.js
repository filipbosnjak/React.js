import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";
import { pizzeriaReducer } from "./pizzeriaReducer";

export const rootReducer = combineReducers({
  orderReducer,
  pizzeriaReducer,
});
