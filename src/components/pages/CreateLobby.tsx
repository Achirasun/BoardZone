import React from 'react';
import './CreateLobby.css';
import { RxAvatar } from "react-icons/rx";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link, NavLink } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import InputLobby from '../InputFeild/InputLobby';

export const CreateLobby = () => {
  return (
    <div >
        <Link to="/" className="title">
          BOARD<IoStar color='ffc228'/>ZONE
        </Link>
        <div className="CreateLobby">
          <h1>LOBBY SETUP</h1>
          <div className="whitespace-pre-wrap"/>

          <InputLobby />

        </div>
        
    </div>
  );
}

export default CreateLobby;
