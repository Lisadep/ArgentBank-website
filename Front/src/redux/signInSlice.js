import { createSlice } from "@reduxjs/toolkit"

//Création d'une slice pour gérer l'état relatif à la connexion / déconnexion
const signInSlice = createSlice({
  name: "signIn",
  initialState: { token: "" },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload // prend l'état actuel et l'action en cours, et met à jour le token
    },
    signOut: (state) => {
      state.token = "" // réinitialise la propriété token de l'état en la vidant
    }
  }
})

export default signInSlice