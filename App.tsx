import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Home, BoardGame, Funds} from './components/pages';
import Post from './components/FundsPost/Post';
import FDetail from './components/FundsDetail/FDetail';

function App() {
  return (
    <div>

      <NavBar />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boardgame" element={<BoardGame />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/funds/post" element={<Post />} />
          <Route path="/funds/detail" element={<FDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
