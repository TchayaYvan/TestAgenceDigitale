import axios from "axios";

// Action Types
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_SINGLE_PRODUCT = "SET_SINGLE_PRODUCT";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS_BY_CATEGORY = "SET_PRODUCTS_BY_CATEGORY";
export const SET_PRODUCTS_TOPS = "SET_PRODUCTS_TOPS";
export const SET_PRODUCTS_LAPTOPS = "SET_PRODUCTS_LAPTOPS";

// API URL
const API_URL = "https://dummyjson.com/products";

// Headers for API requests
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// Action Creators
export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export function setSingleProduct(product) {
  return {
    type: SET_SINGLE_PRODUCT,
    payload: product,
  };
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
}

export function setProductsByCategory(productsCategorie) {
  return {
    type: SET_PRODUCTS_BY_CATEGORY,
    payload: productsCategorie,
  };
}

export function setProductsTops(productsTops) {
  return {
    type: SET_PRODUCTS_TOPS,
    payload: productsTops,
  };
}

export function setProductsLaptops(productsLaptops) {
  return {
    type: SET_PRODUCTS_LAPTOPS,
    payload: productsLaptops,
  };
}

// Thunks for API Requests
export function fetchAllProducts() {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      dispatch(setProducts(response.data.products));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
}

export function fetchSingleProduct(productId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/${productId}`);
      dispatch(setSingleProduct(response.data));
    } catch (error) {
      console.error("Error fetching single product:", error);
    }
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      dispatch(setCategories(response.data));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
}

export function fetchProductsByCategory({ category }, callback) {
  return async () => {
    try {
      const response = await axios.get(`${API_URL}/category/${category}`);

      callback(response.data.products);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };
}

export function fetchProductsTops() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/category/tops`);
      dispatch(setProductsTops(response.data.products));
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };
}

export function fetchProductsLaptops() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/category/laptops`);
      dispatch(setProductsLaptops(response.data.products));
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };
}
