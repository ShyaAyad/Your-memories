import { create } from "zustand";
import * as api from '../Api.js'

export const useUserAccount = create((set) => ({
    user: null, // initally we have no user 
    signUp: async(data) => {
    try {
      const newUser = await api.signUp(data);
      const newUserData = newUser.data;
      console.log(newUserData)
      set({user: newUserData})
    } catch (error) {
      console.log("Failed to create user, please try again")
    }
  }
}))