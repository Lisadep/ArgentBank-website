import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { signIn } from "../redux/store"
import callAPI from "../services/apiServices"

function Form() {
  // Création de plusieurs états locaux pour gérer les champs du formulaire et les messages d'erreur
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Connexion
  const signInUser = async (e) => {
    e.preventDefault() // Empêche le comportement par défaut du formulaire (rechargement de la page)

    try {
      const response = await callAPI("getToken", null, {
        email: email,
        password: password,
      }) // apl à l'api pour obtenir le token
      const token = response.body.token
      dispatch(signIn(token)) // Dispatch d'une action pour stocker le token dans le Redux store
      navigate("/User")
    } catch (error) {
      console.error("Error on API connection call :", error)
      setErrorMessage(error.message)
    }
  }

  return (
    <form onSubmit={signInUser}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
      <div className="error-msg">{errorMessage}</div>
    </form>
  )
}

export default Form
