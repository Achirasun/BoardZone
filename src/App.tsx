import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Home, Login, Register, BoardGame, Lobby, Funds, CreateLobby } from './components/pages';
import Post from './components/FundsPost/Post';
import FDetail from './components/FundsDetail/FDetail';
import BoardGameDetail from './components/BoardGameDetail/BoardGameDetail';
import { LobbyProvider } from './data/LobbyData';
import LobbyDetails from './components/LobbyDetails/LobbyDetails';
import { UserProvider } from './data/UserContext';

function App() {
  return (
    < UserProvider >
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
          <Route path="/funds/:id" element={<FDetail />} />
          <Route path="/boardgame/:id/createlobby" element={<CreateLobby />} />
          <Route path="/lobby/:id" element={<LobbyDetails />} />
        </Routes>
      </div>
    </div>
    </LobbyProvider>
    </UserProvider>
  );
}

export default App;
