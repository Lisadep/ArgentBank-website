import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUserData } from "../redux/store"
import callAPI from "../services/apiServices"
import EditForm from "../components/editForm"

function User() {

  const token = useSelector(state => state.signIn.token) // Récupération de la valeur du token stocké dans le slice signIn
  const userProfile = useSelector((state) => state.userProfile) // Récupération des infos de l'utilisateur
  const dispatch = useDispatch() // Envoi des actions à l'état global

  useEffect(() => {
      const getUserProfile = async () => {
          try {
              const response = await callAPI("getProfile", token, {})
              const userData = response.body;
              dispatch(getUserData(userData)) // envoi l'action getUserData avec les données de l'utilisateur

          } catch (error) {
              console.error("Error retrieving user profile :", error);
          }
      }
      getUserProfile();
  }, [token, dispatch]); //si token ou dispatch change, getUsetProfile sera exécutée

    return (
      <main className="main bg-dark">
        <div className="header">
                <h1 className="name">Welcome back<br />{userProfile.firstName} {userProfile.lastName}!</h1>
            </div>
            <EditForm/>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    );
  }
  
  export default User;