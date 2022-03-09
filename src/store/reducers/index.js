import { combineReducers } from "redux";
import berriesApiReducer from "./berriesApiReducer";
import changeFilterReducer from "./changeFilterReducer";
import berryApiReducer from "./berryApiReducer";

const rootReducer = combineReducers({
  berriesCollection: berriesApiReducer,
  changeFilterState: changeFilterReducer,
  berryDetails: berryApiReducer
});

export default rootReducer;
