import { create } from "zustand";
import * as api from "../../Api.js";

const storedUser = localStorage.getItem("user");

export const useUserAccount = create((set) => ({
  user: storedUser ? JSON.parse(storedUser) : null,
  signUp: async (data) => {
    try {
      const newUser = await api.signUp(data);
      const newUserData = newUser.data.data;
      set({ user: newUserData });
      localStorage.setItem("user", JSON.stringify(newUserData));
      return true;
    } catch (error) {
      console.log("Failed to create user, please try again");
      return false;
    }
  },
  logIn: async (data) => {
    try {
      const existingUser = await api.logIn(data);
      const userData = existingUser.data.data;
      set({ user: userData });
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    } catch (error) {
      console.log("Failed to login, try logging in again!");
      return false;
    }
  },
  logOut: async () => {
    try {
      await api.logOut();
      localStorage.removeItem("user");
    } catch (error) {
      console.log("Failed to log out, please try again!");
    } finally {
      set({ user: null });
      localStorage.removeItem("user"); // IMPORTANT
    }
  },
}));
