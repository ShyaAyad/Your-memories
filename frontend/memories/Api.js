// Api.js - Fixed version
import axios from "axios";

// Use environment variable or default to port 5000
// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Create axios instance with default config
const api = axios.create({
  baseURL: `http://localhost:8000`,
  withCredentials: true, // Enable credentials for all requests
//   headers: {
//     "Content-Type": "application/json",
//   },
});

// Memory/Post endpoints
export const getAllPostsData = async () => 
  await api.get("/api/memory");

export const createAMemory = async (newMemory) => 
  await api.post("/api/memory", newMemory);

export const updateAMemory = async (memoryId, data) => 
  await api.put(`/api/memory/${memoryId}`, data);

export const deleteAMemory = async (memoryId) => 
  await api.delete(`/api/memory/${memoryId}`);

export const likeMemory = async(memoryId) => 
  await api.patch(`/api/memory/${memoryId}/like`);

// Authentication endpoints
export const signUp = async (data) => 
  await api.post("/api/auth/signup", data);

export const logIn = async (data) => 
  await api.post("/api/auth/login", data);

export const logOut = async () => 
  await api.get("/api/auth/logout");

export default api;