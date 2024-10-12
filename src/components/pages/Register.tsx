import React, { useState } from 'react';
import './Register.css';
import { RxAvatar } from "react-icons/rx";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link, NavLink } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import InputRegister from '../InputFeild/InputRegister';

export const Register = () => {


  return (
    <div >
        <Link to="/" className="title">
          BOARD<IoStar color='ffc228'/>ZONE
        </Link>
        <div className="Register">
          <h1>SIGN UP</h1>
          <div className="whitespace-pre-wrap"/>

          <InputRegister/>
          
          
        </div>
        
    </div>
  );
}

export default Register;
