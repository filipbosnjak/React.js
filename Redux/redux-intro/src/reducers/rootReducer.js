import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import doubleReducer from "./doubleReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  counterReducer,
  doubleReducer,
  formReducer,
});

export default rootReducer;
