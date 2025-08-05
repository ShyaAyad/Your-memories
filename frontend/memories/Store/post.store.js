import { create } from "zustand";
import * as api from "../Api.js"; // importing everything from the API file

// zustands create function
export const useCreatePost = create((set) => ({
  posts: [], // initial state of posts is an empty array
  getAllMemories: async () => {
    try {
      const res = await api.getAllPostsData();
      const data = res.data; // get the data from the response object which looks like this
    /* {
            data: ...,       // we want this which has (title, creator, description...etc)
            status: 200,
            statusText: 'OK',
            headers: { ... },
            config: { ... },
            request: { ... }
        } 
    */
      set(() => ({ posts: data }));
    } catch (error) {
      console.log("No memory was found!", error);
    }
  },

  createMemory: async (newMemory) => {
    try {
      const newPost = await api.createAMemory(newMemory); // send put request to the backend
      const responseData = newPost.data; // Axios always returns a response object
      set((state) => ({ posts: [...state.posts, responseData] })); // updating zustand function
    } catch (error) {
      console.log("Failed to create memory, Try again!");
    }
  },

  updateMemory: async (memoryId) => {
    try {

      // send request to backend for editing
      const update = await api.updateAMemory(memoryId)

      set(() => ({posts: [...posts, update]}))
    } catch (error) {}
  },

  deleteMemory: async (memoryId) => {
    try {
      const deletePostData = await api.deleteAMemory(memoryId); // passing the id of the memory to be deleted to the API call 

      if (!deletePostData) {
        console.log("Couldn't find memory, please try again!");
      }

      set((state) => ({
        posts: state.posts.filter((post) => post._id !== memoryId),
      }));
    } catch (error) {
      console.log("Can't delete memory, Try again!");
    }
  },
}));
