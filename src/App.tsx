import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Login from './components/pages/Login';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
