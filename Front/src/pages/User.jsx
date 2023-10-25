import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../redux/store";
import callAPI from "../api/callApi"
import EditForm from "../components/editform"

function User() {

  const token = useSelector(state => state.signIn.token)
  const dispatch = useDispatch()
  const userProfile = useSelector((state) => state.userProfile)

  
  useEffect(() => {
      const getUserProfile = async () => {
          try {
              const response = await callAPI("getProfile", token, {})
              const userData = response.body;
              dispatch(getUserData(userData))

          } catch (error) {
              console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
          }
      }
      getUserProfile();
  }, [token, dispatch]);

    return (
      <main class="main bg-dark">
        <div className="header">
                <h1>Welcome back<br />{userProfile.firstName} {userProfile.lastName}!</h1>
            </div>
        <h2 class="sr-only">Accounts</h2>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Checking (x8349)</h3>
            <p class="account-amount">$2,082.79</p>
            <p class="account-amount-description">Available Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Savings (x6712)</h3>
            <p class="account-amount">$10,928.42</p>
            <p class="account-amount-description">Available Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
            <p class="account-amount">$184.30</p>
            <p class="account-amount-description">Current Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    );
  }
  
  export default User;