import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./signInSlice"
import userProfileSlice from "./userProfileSlice";

const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
    userProfile: userProfileSlice.reducer,
  },
});

export const { signIn, signOut } = signInSlice.actions;
export const { getUserData, editUserData } = userProfileSlice.actions;

export default store;