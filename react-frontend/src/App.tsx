import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Signup/Signup';
import Signup from './Components/Login/Login';
import Home from './Components/HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
