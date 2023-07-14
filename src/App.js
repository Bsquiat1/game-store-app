import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home.jsx';

import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';



  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </div>
    </Router>
  );


export default App;
