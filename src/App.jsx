import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Projects from './components/mywork/projects';
import Contact from './components/contact/Contact';
import Aboutme from './components/aboutme/aboutme'; 

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
