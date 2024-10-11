import React from 'react';
import './Login.css';
import { RxAvatar } from "react-icons/rx";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link, NavLink } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import InputUsername from '../InputFeild/InputUsername';

export const Login = () => {
  return (
    <div >
        <Link to="/" className="title">
          BOARD<IoStar color='ffc228'/>ZONE
        </Link>
        <div className="Login">
          <h1>LOGIN</h1>
          <div className="whitespace-pre-wrap"/>

          <InputUsername />

            {/* <input type="text" name="username" placeholder="Username"></input>

          <div className="whitespace-pre-wrap"/>

            <input type="password" name="password" placeholder="Password"></input> */}

          
          
          <div className='signup-container'>
            <p>Don’t have an account ?</p>
            <Link to="/register">
              <button>Sign up</button>
            </Link>
          </div>
        </div>
        
    </div>
  );
}

export default Login;
