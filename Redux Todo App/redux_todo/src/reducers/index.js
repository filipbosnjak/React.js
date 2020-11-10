import { combineReducers } from "redux";
import todosReducer from "./todos-reducer";
import filterReducer from "./filter-reducer";

const rootReducer = combineReducers({
  todosReducer,
  filterReducer,
});

export default rootReducer;
