import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUserData } from "../redux/store"
import callAPI from "../services/apiServices"
import EditForm from "../components/editForm"
import Account from "../components/account"

function User() {
  const token = useSelector((state) => state.signIn.token) // Récupération de la valeur du token stocké dans le slice signIn
  const userProfile = useSelector((state) => state.userProfile) // Récupération des infos de l'utilisateur
  const dispatch = useDispatch() // Envoi des actions à l'état global

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await callAPI("getProfile", token, {})
        const userData = response.body
        dispatch(getUserData(userData)) // envoi l'action getUserData avec les données de l'utilisateur
      } catch (error) {
        console.error("Error retrieving user profile :", error)
      }
    }
    getUserProfile()
  }, [token, dispatch]) //si token ou dispatch change, getUsetProfile sera exécutée

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="name">
          Welcome back
          <br />
          {userProfile.firstName} {userProfile.lastName}!
        </h1>
      </div>
      <EditForm />
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        text="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        text="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        text="Current Balance"
      />
    </main>
  )
}

export default User
