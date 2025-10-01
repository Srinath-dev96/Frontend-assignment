import axios from "axios";

// Use environment variable (set REACT_APP_API_URL on Vercel)
const API_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: `${API_URL}/api`,
});

// Attach token to every request if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
