import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App(){

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;