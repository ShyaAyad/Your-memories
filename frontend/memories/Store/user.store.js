import { create } from "zustand";
import * as api from "../Api.js";

export const useUserAccount = create((set) => ({
  user: null, // initally we have no user
  signUp: async (data) => {
    try {
      const newUser = await api.signUp(data);
      const newUserData = newUser.data.data;
      set({ user: newUserData });
    } catch (error) {
      console.log("Failed to create user, please try again");
    }
  },
    logIn: async(data) => {
        try {
            const existingUser = await api.logIn(data);
            const userData = existingUser.data.data
            set({user: userData})
        } catch (error) {
            console.log("Failed to login, try logging in again!")
        }
    }
}));
