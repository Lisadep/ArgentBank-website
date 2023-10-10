import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/header'
import Home from './pages/Home'
import User from './pages/User'
import SignIn from './pages/SignIn'
import Footer from './components/footer'
import Error from './pages/Error'

const App = () => {
  const token = useSelector(state => state.signIn.token)
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={token ? <User /> : <Navigate to="/sign-in" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;