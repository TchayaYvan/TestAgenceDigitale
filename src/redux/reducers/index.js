import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import productsReducer from "./products";
import cartsReducer from "./carts";
import authUserReducer from "./authUser";

const rootReducer = combineReducers({
  language: languageReducer,
  products: productsReducer,
  carts: cartsReducer,
  authUser : authUserReducer
  // ... ajoutez d'autres reducers ici
});

export default rootReducer;
