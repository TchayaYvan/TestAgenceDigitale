import axios from "axios";

// Action Types
export const SET_CARTS = "SET_CARTS";
export const SET_SINGLE_CART = "SET_SINGLE_CART";
export const SET_USER_CARTS = "SET_USER_CARTS";

// API URL
const API_URL = "https://dummyjson.com/carts";

// Headers for API requests
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// Action Creators
export function setCarts(carts) {
  return {
    type: SET_CARTS,
    payload: carts,
  };
}

export function setSingleCart(cart) {
  return {
    type: SET_SINGLE_CART,
    payload: cart,
  };
}

export function setUserCarts(userCarts) {
  return {
    type: SET_USER_CARTS,
    payload: userCarts,
  };
}

// Thunks for API Requests
export function fetchAllCarts() {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      dispatch(setCarts(response.data.carts));
    } catch (error) {
      console.error("Error fetching carts:", error);
    }
  };
}

export function fetchSingleCart(cartId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/${cartId}`);
      dispatch(setSingleCart(response.data));
    } catch (error) {
      console.error("Error fetching single cart:", error);
    }
  };
}

export function fetchUserCarts(userId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/user/${userId}`);
      dispatch(setUserCarts(response.data.carts));
    } catch (error) {
      console.error("Error fetching user carts:", error);
    }
  };
}

export function addCart({userId, products}, callback) {
  return async () => {
    try {
      const response = await axios.post(`${API_URL}/add`, {
        userId,
        products,
      });
      if (response.status === 200) {
        callback({ success: true, message: "Cart added successfully." });
      }
    } catch (error) {
      console.error("Error adding cart:", error);
      callback({ success: false, message: "Failed to add cart." });
    }
  };
}
