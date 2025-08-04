import { create } from 'zustand';
import * as api from '../Api.js' // importing everything from the API file

// zustands create function
export const useCreatePost = create((set) => ({
    posts: [], 

    getAllPosts: async() => {
        try {
            const res = await api.getAllPostsData()
            const data = await res.json(); // parsing the response 
            set({posts: data})
            console.log(res)
        } catch (error) {
            console.log("No memory was found!")
        }
    },

    createPost: async() => {
        try {
            
        } catch (error) {
            
        }
    },

    updatePost: async(postId) => {
        try {
            
        } catch (error) {
            
        }
    },

    deletePost: async(postId) => {
        try {
            
        } catch (error) {
            
        }
    }
}))