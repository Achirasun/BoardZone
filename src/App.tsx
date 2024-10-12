import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Home, Login, Register, BoardGame, Lobby, Funds, CreateLobby } from './components/pages';
import Post from './components/FundsPost/Post';
import FDetail from './components/FundsDetail/FDetail';
import BoardGameDetail from './components/BoardGameDetail/BoardGameDetail';
import { LobbyProvider } from './data/LobbyData';

function App() {
  return (
    <LobbyProvider>
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
          <Route path="/createlobby" element={<CreateLobby />} />
        </Routes>
      </div>
    </div>
    </LobbyProvider>
  );
}

export default App;
