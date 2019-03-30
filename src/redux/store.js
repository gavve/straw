import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
//import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

// Add loggerMiddleware to middleware array below if you want logging in console
//const loggerMiddleware = createLogger() 

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;