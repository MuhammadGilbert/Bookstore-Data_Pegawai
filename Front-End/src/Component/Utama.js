import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Gallery from '../Pages/Gallery';
import About from '../Pages/about';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';

const Utama = () => (
    
    <Routes>
        <Route path="/" element={Home} exact></Route>
        <Route path="/Contact" element={Contact} ></Route>
        <Route path="/About" element={About} ></Route>
        <Route path="/Gallery" element={Gallery} ></Route>
    </Routes>
)

export default Utama;