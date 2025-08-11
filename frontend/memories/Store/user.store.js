import { create } from "zustand";
import * as api from "../Api.js";

export const useUserAccount = create((set) => ({
  // JSON.parse(localStorage.getItem("user")) ||
  user: null, // initally we have no user
  signUp: async (data) => {
    try {
      const newUser = await api.signUp(data);
      const newUserData = newUser.data.data;
      set({ user: newUserData });
      // localStorage.setItem('user', JSON.stringify(newUserData)) // store user in local storage to still have user after refreshing
      return true; // if not using this return statement then user won't be redirected to homepage after successfully registering
    } catch (error) {
      console.log("Failed to create user, please try again");
      return false; // couldn't register
    }
  },
  logIn: async (data) => {
    try {
      const existingUser = await api.logIn(data);
      const userData = existingUser.data.data;
      set({ user: userData });
      // localStorage.setItem('user', JSON.stringify(userData))
      console.log(userData);
      return true; // if not using this return statement then user won't be redirected to homepage after successfully logging in
    } catch (error) {
      console.log("Failed to login, try logging in again!");
      return false; // couldn't login
    }
  },
  logOut: async () => {
    try {
      const logout = await api.logOut();
      console.log(logout);
      set({user: null}) // set user to null when user logs out
    } catch (error) {
      console.log(error)
      console.log("Failed to log out, please try again!")

      set({user: null}) 
    }
  },
}));
