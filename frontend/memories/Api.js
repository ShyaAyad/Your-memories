// this is a global API fetching for a cleaner code 
import axios from "axios"

const url = "http://localhost:8000/api/memory"

export const getAllPostsData = async() => await axios.get(url)
export const createAMemory = async(newMemory) =>  await axios.post(url, newMemory, { withCredentials: true }) // accept form data and send request to the backend to create a memory 
// acception the id and sending it to the backend to edit it 
export const updateAMemory = async(memoryId, data) => await axios.put(`http://localhost:8000/api/memory/${memoryId}`, data)
// acception the id and sending it to the backend to delete it 
export const deleteAMemory = async(memoryId) =>  await axios.delete(`http://localhost:8000/api/memory/${memoryId}`) 

// authentication requests to the backend
export const signUp = async(data) => await axios.post(`http://localhost:8000/api/auth/signup`, data) // send data to backend to create user
export const logIn = async(data) => await axios.post(`http://localhost:8000/api/auth/login`, data) // send data to backend to find user with the information 
export const logOut = async() => await axios.get(`http://localhost:8000/api/auth/logout`) // request to log user out
