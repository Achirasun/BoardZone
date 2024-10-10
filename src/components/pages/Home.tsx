import React from 'react'
import './Home.css'
import { NavBar } from "../../components/NavBar/NavBar";

export const Home = () => {
  return (
    <div className="container">
        <div className="pages-container"></div>
        <NavBar />
    </div>
  )
}

export default Home;