import axios from "axios";

// Action Types
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

// API URL
const API_URL = "https://dummyjson.com/auth";

// Headers for API requests
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// Action Creators
export function authSuccess(user) {
  return {
    type: AUTH_SUCCESS,
    payload: user,
  };
}

export function authFailure(errorMessage) {
  return {
    type: AUTH_FAILURE,
    payload: errorMessage,
  };
}

// Thunks for API Requests
export function loginUser({ username, password }, callback) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
      if (response.status === 200) {
        dispatch(authSuccess(response.data));
        callback({ success: true, message: "Login successful." });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      dispatch(authFailure("Login failed. Please check your credentials."));
      callback({
        success: false,
        message: "Login failed. Please check your credentials.",
      });
    }
  };
}

export function createUser({ username, password, email }, callback) {
  return async () => {
    try {
      const response = await axios.post(`${API_URL}/users/add`, {
        username,
        password,
        email,
      });
      if (response.status === 200) {
        callback({ success: true, message: "User created successfully." });
      } else {
        callback({ success: false, message: "Failed to create user." });
      }
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.response && error.response.status === 403) {
        const errorMessage =
          error.response.data.message || "Forbidden: Access Denied.";
        callback({ success: false, message: errorMessage });
      } else {
        callback({ success: false, message: "Failed to create user." });
      }
    }
  };
}
