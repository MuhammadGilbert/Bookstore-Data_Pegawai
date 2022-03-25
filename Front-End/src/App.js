import React from 'react';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';

import Gallery from './Pages/Gallery';
import About from './Pages/about';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Pegawai from './Pages/Pegawai';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <Link to="" className="navbar-brand p-2" >BOOKSTORE</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/" className="nav-link" >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Gallery" className="nav-link" >
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link" >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Contact" className="nav-link" >
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Cart" className="nav-link" >
                Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Pegawai" className="nav-link" >
                Pegawai
              </Link>
            </li>
          </ul>
        </div>
        </nav>
        <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/Gallery" element={<Gallery/>} ></Route>
        <Route path="/Cart" element={<Cart/>} ></Route>
        <Route path="/Pegawai" element={<Pegawai/>} ></Route>
        </Routes>
    </div>
    </div>
  );
}

export default App;