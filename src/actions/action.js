import { ADD_USER, SET_IMAGES } from "./actionTypes";
import axios from "axios";
export const addUser = (name, password) => async (dispatch) => {
  dispatch({ type: ADD_USER, payload: { name: name, password: password } });
};
export const getPhotos = () => async (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
    dispatch({ type: SET_IMAGES, payload: { images: response.data } });
  });
};
