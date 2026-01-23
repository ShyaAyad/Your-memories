import { create } from "zustand";
import * as api from "../../Api.js";

// Zustand create function
export const useCreatePost = create((set) => ({
  posts: [], // initial state of posts is an empty array
  loading: false,
  error: null,

  getAllMemories: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.getAllPostsData();
      const data = res.data;

      // Ensure data is an array
      const postsArray = Array.isArray(data) ? data : [];

      set({ posts: postsArray, loading: false });
    } catch (error) {
      console.error("No memory was found!", error);
      set({ posts: [], loading: false, error: error.message });
    }
  },

  createMemory: async (newMemory) => {
    set({ error: null });
    try {
      const newPost = await api.createAMemory(newMemory);
      const responseData = newPost.data;

      set((state) => ({
        posts: [...state.posts, responseData],
        error: null,
      }));

      return { success: true, data: responseData };
    } catch (error) {
      console.error("Failed to create memory, Try again!", error);
      set({ error: error.message });
      return { success: false, error: error.message };
    }
  },

  updateMemory: async (memoryId, data) => {
    set({ error: null });
    try {
      const update = await api.updateAMemory(memoryId, data);

      set((state) => ({
        posts: state.posts.map((post) =>
          post._id === memoryId ? { ...post, ...update.data } : post,
        ),
        error: null,
      }));

      return { success: true, data: update.data };
    } catch (error) {
      console.error("Couldn't edit post, try again", error);
      set({ error: error.message });
      return { success: false, error: error.message };
    }
  },

  deleteMemory: async (memoryId) => {
    set({ error: null });
    try {
      await api.deleteAMemory(memoryId);

      set((state) => ({
        posts: state.posts.filter((post) => post._id !== memoryId),
        error: null,
      }));

      return { success: true };
    } catch (error) {
      console.error("Can't delete memory, Try again!", error);
      set({ error: error.message });
      return { success: false, error: error.message };
    }
  },

  likeMemory: async (memoryId) => {
    try {
      const res = await api.likeMemory(memoryId);

      set((state) => ({
        posts: state.posts.map((post) =>
          post._id === memoryId ? res.data : post,
        ),
      }));

      return { success: true };
    } catch (error) {
      console.error("Like failed", error);
      return { success: false };
    }
  },
}));
