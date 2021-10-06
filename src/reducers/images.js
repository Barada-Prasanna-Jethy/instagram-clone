import { SET_IMAGES } from "../actions/actionTypes";
const initialState = [];
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGES: {
      return [...state, ...action.payload.images];
    }
    default:
      return state;
  }
}
