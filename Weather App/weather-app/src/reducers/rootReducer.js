import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { iconReducer } from "./iconReducer";

const rootReducer = combineReducers({
  weatherReducer,
  iconReducer,
});
export default rootReducer;
