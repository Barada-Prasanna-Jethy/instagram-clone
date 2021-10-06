import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
export const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(ReduxThunk))
);
