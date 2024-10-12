import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Home, Login, Register, BoardGame, Lobby, Funds } from './components/pages';
import Post from './components/FundsPost/Post';
import FDetail from './components/FundsDetail/FDetail';
import BoardGameDetail from './components/BoardGameDetail/BoardGameDetail';

function App() {
  return (
    <div>

      <NavBar />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/boardgame" element={<BoardGame />} />
          <Route path="/boardgame/:id" element={<BoardGameDetail />}/>
          
          <Route path="/lobby" element={<Lobby />} />

          <Route path="/funds" element={<Funds />} />
          <Route path="/funds/post" element={<Post />} />
          <Route path="/funds/detail" element={<FDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
