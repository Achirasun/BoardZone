import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Home, BoardGame, Register, Login, Lobby } from './components/pages';

function App() {
  return (
    <div>

      <NavBar />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boardgame" element={<BoardGame />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
