import { configureStore } from "@reduxjs/toolkit"
import signInSlice from "./signInSlice"
import userProfileSlice from "./userProfileSlice"

const store = configureStore({ //cette configuration combine les réducteurs des deux slices (signIn et userProfile)
  reducer: {
    signIn: signInSlice.reducer,
    userProfile: userProfileSlice.reducer,
  },
});

// exportation des actions des deux slices
export const { signIn, signOut } = signInSlice.actions;
export const { getUserData, editUserData } = userProfileSlice.actions;

export default store;