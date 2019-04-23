import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "../reducers/index";
import { forbiddenWordMiddleware } from "../middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  storeEnhancers(applyMiddleware(forbiddenWordMiddleware)),
  //   composeWithDevTools(),
);

export default store;
