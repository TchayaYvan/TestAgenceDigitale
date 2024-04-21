import { SET_CARTS, SET_SINGLE_CART, SET_USER_CARTS } from "../actions/carts";

const initialState = {
  allCarts: [],
  singleCart: null,
  userCarts: [],
};

export default function cartsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARTS:
      return {
        ...state,
        allCarts: action.payload,
      };
    case SET_SINGLE_CART:
      return {
        ...state,
        singleCart: action.payload,
      };
    case SET_USER_CARTS:
      return {
        ...state,
        userCarts: action.payload,
      };
    default:
      return state;
  }
}
