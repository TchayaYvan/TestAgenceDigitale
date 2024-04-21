import {
  SET_PRODUCTS,
  SET_SINGLE_PRODUCT,
  SET_CATEGORIES,
  SET_PRODUCTS_BY_CATEGORY,
  SET_PRODUCTS_TOPS,
  SET_PRODUCTS_LAPTOPS,
} from "../actions/products";

const initialState = {
  allProducts: [],
  singleProduct: null,
  categories: [],
  productsByCategory: [],
  productsTops: [],
  productsLaptops: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case SET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: action.payload,
      };

    case SET_PRODUCTS_TOPS:
      return {
        ...state,
        productsTops: action.payload,
      };
    case SET_PRODUCTS_LAPTOPS:
      return {
        ...state,
        productsLaptops: action.payload,
      };
    default:
      return state;
  }
}
