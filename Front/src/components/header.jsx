import { NavLink } from 'react-router-dom';
import logo from "../assets/img/argentBankLogo.png"
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../redux/store'

function Header() {
  const userProfile = useSelector((state) => state.userProfile)
  const dispatch = useDispatch()
  const token = useSelector((state) => state.signIn.token);

  const handleSignOut = () => {
      dispatch(signOut())
  }

  return (
      <nav className='main-nav'>
          <NavLink to="/" className='main-nav-logo'>
              <img
                  className='main-nav-logo-image'
                  src={logo}
                  alt="Argent Bank Logo" />
              <h1 className='sr-only'>Argent Bank</h1>
          </NavLink>
          <div>
              {
                  token ?
                      <>
                          <NavLink to="/user" className="main-nav-item">
                              <i className="fa fa-user-circle"></i>
                              {userProfile.firstName}
                          </NavLink>
                          <NavLink to="/" onClick={handleSignOut} className="main-nav-item">
                              <i className="fa fa-sign-out"></i>
                              Sign Out
                          </NavLink>
                      </>
                      :
                      <NavLink to="/Signin" className="main-nav-item">
                          <i className='fa fa-user-circle'></i>
                          Sign In
                      </NavLink>
              }
          </div>
      </nav>
  )

}

export default Header