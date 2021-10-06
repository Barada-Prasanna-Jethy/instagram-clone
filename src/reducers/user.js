import { ADD_USER } from "../actions/actionTypes";
const initialState = [];
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return [
        ...state,
        { name: action.payload.name, password: action.payload.password },
      ];
    }
    default:
      return state;
  }
}
