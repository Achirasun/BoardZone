import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="container-inner">
      <div className="pages-container">
        <Link to='/boardgame' className="page-chooser boardgame">Board Game</Link>
        <Link to='/lobby' className="page-chooser lobby">Lobby</Link>
        <Link to='/funds' className="page-chooser funds">Funds</Link>
      </div>
    </div>
  )
}

export default Home;
