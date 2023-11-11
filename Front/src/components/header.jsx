import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signOut } from "../redux/store"
import logo from "../assets/img/argentBankLogo.png"

function Header() {
  const userProfile = useSelector((state) => state.userProfile) // Récupération des infos utilisateur
  const token = useSelector((state) => state.signIn.token) // Récupération du token
  const dispatch = useDispatch()

  // Déconnexion
  const signOutUser = () => {
    dispatch(signOut())
  }

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? ( // si token présent on affiche nom de l'utilisateur + déco, sinon signin
          <>
            <NavLink to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userProfile.userName}
            </NavLink>
            <NavLink to="/" onClick={signOutUser} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
