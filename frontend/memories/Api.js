// this is a global API fetching for a cleaner code 
import axios from "axios"

const url = "http://localhost:8000/api/memory"

export const getAllPostsData = axios.get(url)
// export const createAMemory = axios.post(url, newPost)
// export const updateAMemory = axios.put(url, postData)
// export const deleteAMemory = axios.delete()