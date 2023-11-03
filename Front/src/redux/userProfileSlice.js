import { createSlice } from "@reduxjs/toolkit"

//Création d'une slice pour gérer l'état relatif au profil d'utilisateur
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    // Récupération et stockage des données utilisateur
    getUserData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      // indique le type d'action associé au reducer et le format du payload attendu :
      // type : userProfile/getUserData, payload : userData
    },
    //Modification de la donnée userName
    editUserData: (state, action) => {
      state.userName = action.payload
      // type : userProfile/editUserData, payload : newUserName
    },
  },
})

export default userProfileSlice