import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import './App.css';

import Home from './Home/Home';
import About from './Home/About';
import Api from './Home/Api';
import Auth from './Home/Auth';
import How from './Home/How';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/api" element={<Api />} />
      <Route path="/how" element={<How />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default Pages;