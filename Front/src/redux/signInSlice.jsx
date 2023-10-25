import { createSlice } from "@reduxjs/toolkit"

const signInSlice = createSlice({
  name: "signIn",
  initialState: { token: "" },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload
    },
    signOut: (state) => {
      state.token = ""
    }
  }
})

export default signInSlice