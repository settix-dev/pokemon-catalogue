import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

export default createStore(composeWithDevTools(middleware));
