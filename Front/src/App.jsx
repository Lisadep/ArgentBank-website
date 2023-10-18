import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Footer from './components/footer'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;