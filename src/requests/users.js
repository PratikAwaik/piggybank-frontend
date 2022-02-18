import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL + "/api/users";

export const loginRequest = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerRequest = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
