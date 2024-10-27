import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar.js';
import MultiSteps from './component/MultiSteps.js';
import AboutUs from './component/AboutUs'; // Create this component
import ContactUs from './component/ContactUs'; // Create this component
import NewProperties from './component/NewProperties'; // Create this component
import 'bootstrap/dist/css/bootstrap.min.css';
import Right from './component/Right.js'; // Adjust the path according to your file structure

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<MultiSteps />} />
            <Route path="/" element={<Right />} />
            <Route path="/new-properties" element={<NewProperties />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;

