import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Home, BoardGame } from './components/pages';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boardgame" element={<BoardGame />} />
      </Routes>
    </div>
  );
}

export default App;
