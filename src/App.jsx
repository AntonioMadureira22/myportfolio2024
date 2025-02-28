import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/Home/Home';
import Projects from './components/mywork/projects';
import Contact from './components/contact/Contact';
import Aboutme from './components/aboutme/aboutme'; 
import Game from './components/game/Game';
import Footer from './components/Footer/Footer';
import LiveStream from './components/LiveStream/LiveStream';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game" element={<Game />} />
        <Route path='/livestream' element={<LiveStream/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
