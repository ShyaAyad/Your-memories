// this is a global API fetching for a cleaner code 
import axios from "axios"

const url = "http://localhost:8000/api/memory"

export const getAllPostsData = async() => await axios.get(url)
export const createAMemory = async(newMemory) =>  await axios.post(url, newMemory)

// acception the id and sending it to the backend to edit it 
export const updateAMemory = async(memoryId) => await axios.put(`http://localhost:8000/api/memory/${memoryId}`)

// acception the id and sending it to the backend to delete it 
export const deleteAMemory = async(memoryId) =>  await axios.delete(`http://localhost:8000/api/memory/${memoryId}`) 