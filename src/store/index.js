import create from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create(
  persist((set) => ({
    thisUser: false,
    userLogin: () => set({ thisUser: true }),
    userLogout: () => set({ thisUser: false }),
  }))
);
