import { combineReducers } from "redux";
import userReducer from "./user";
import imageReducer from "./images";

export const rootReducer = combineReducers({
  user: userReducer,
  images: imageReducer,
});
