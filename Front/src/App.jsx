import './style/main.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home'
import User from './pages/User'
// import SignIn from './pages/SingIn'
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user" element={<User />}/>
          {/* <Route path="/signin" element={<SignIn />}/> */}
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;