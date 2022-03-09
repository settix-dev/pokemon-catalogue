import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import rootReducer from "./reducers/berriesApiReducer";


let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);
// const store = createStore(rootReducer, composeWithDevTools(middleware));

export default createStore(rootReducer, composeWithDevTools(middleware));

