import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from "./components/header"
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User';
import { Navigate } from 'react-router-dom';
import Footer from './components/footer'
import Error from './pages/Error'

const App = () => {
  const token = useSelector(state => state.signIn.token)
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/user" element={token ? <User /> : <Navigate to="/SignIn" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;