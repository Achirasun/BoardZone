import React, { useState } from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

export const NavBar = () => {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Toggle Burger menu change
  const openMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } 
    setIsMenuClicked(!isMenuClicked)
  }

  const closeMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    } 
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div>
      <nav>
        <div className={burger_class} onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="title-line"></span>
        <Link to="/" className="title">
          BOARD<IoStar className="star"/>ZONE
        </Link>

        <Link to="/login" className="avatar">
          <RxAvatar />
        </Link>

      </nav>

      <div className={menu_class}>
        <div className="closed-menu" onClick={closeMenu}>
          <span className="crossbar"></span>
          <span className="crossbar"></span>
        </div>

        <div className="menu-pages">
          <span className="menu-line"></span>

          <li>
            <NavLink to="/boardgame" className="menu-page" onClick={closeMenu}>BOARDGAME</NavLink>
          </li>

          <span className="menu-line"></span>

          <li>
            <NavLink to="/lobby" className="menu-page" onClick={closeMenu}>LOBBY</NavLink>
          </li>

          <span className="menu-line"></span>

          <li>
            <NavLink to="/funds" className="menu-page" onClick={closeMenu}>FUNDS</NavLink>
          </li>

          <span className="menu-line"></span>
        </div>


      </div>


    </div>
  )
}
