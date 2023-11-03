import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Header from "./components/header"
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Error from './pages/Error'
import Footer from './components/footer'

const App = () => {
  const token = useSelector(state => state.signIn.token) //ici useSelector accède à la propriété token du sous-état signIn de l'état global de l'application.
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SignIn />} />
          {/* Si un token est présent (l'utilisateur est authentifié), le composant User est rendu, sinon -> page de connexion */}
          <Route path="/user" element={token ? <User /> : <Navigate to="/sign-in" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;