import { AUTH_SUCCESS, AUTH_FAILURE } from "../actions/authUser";

const initialState = {
  user: null,
  errorMessage: "",
};

export default function authUserReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errorMessage: "",
      };
    case AUTH_FAILURE:
      return {
        ...state,
        user: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
