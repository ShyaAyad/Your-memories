import { create } from "zustand";
import * as api from "../Api.js";

export const useUserAccount = create((set) => ({
  user: null, // initally we have no user
  signUp: async (data) => {
    try {
      const newUser = await api.signUp(data);
      const newUserData = newUser.data.data;
      set({ user: newUserData });
      return true; // if not using this return statement then user won't be redirected to homepage after successfully registering
    } catch (error) {
      console.log("Failed to create user, please try again");
      return false; // couldn't register 
    }
  },
    logIn: async(data) => {
        try {
            const existingUser = await api.logIn(data);
            const userData = existingUser.data.data
            set({user: userData})
            return true; // if not using this return statement then user won't be redirected to homepage after successfully logging in
        } catch (error) {
            console.log("Failed to login, try logging in again!")
            return false; // couldn't login
          }
    }
}));
