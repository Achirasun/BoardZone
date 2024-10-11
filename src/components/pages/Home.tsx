import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="container-inner">
      <div className="pages-container">
        <Link to='/boardgame' className="page-chooser">Board Game</Link>
        <Link to='/lobby' className="page-chooser">Lobby</Link>
        <Link to='/funds' className="page-chooser">Funds</Link>
      </div>
    </div>
  )
}

export default Home;
