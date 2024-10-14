import React, { useContext, useState } from 'react'
import './NavBar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { UserContext } from '../../data/UserContext'; //ค่า user global มา
export const NavBar = () => {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userContext = useContext(UserContext); //เอาตัว user มาจาก global

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

  const handleSubmit = async (e: React.FormEvent) => { //ตัวจัดการการกดส่ง
    e.preventDefault();
    const checkLogin = userContext?.userId; // ตัว user เรียกค่า userId
    if (!checkLogin) { // ถ้า userId เป็น null หรือ undefined
      navigate('/login'); //ส่งไปหน้าที่ต้องการ
    } else {
      console.log('Already Login, User ID:', userContext?.userId); //ถ้ามีอยู่แล้วไม่ต้องทำอะไร (จะใส่ log ก็ได้)
    }
  } // จบ handleSubmit

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
        <form onSubmit={handleSubmit}> {/* ใส่ function ครอบ */}
           <button type='submit' className="avatar"> {/* ใส่ type='submit' */}
            <RxAvatar />
          </button>
        </form>

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
