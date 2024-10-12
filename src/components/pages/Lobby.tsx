import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Lobby.css';
import { RxAvatar } from "react-icons/rx";
import {useLobby } from "../../data/LobbyData"
import { Link } from 'react-router-dom';

export const Lobby = () => {
  // const [lobbies, setLobbies] = useState<LobbyDetail[]>([]);
  const { lobbies, addLobby, joinLobby, setLobbies } = useLobby();

  useEffect(() => {
    const interval = setInterval(() => {
      setLobbies(prevLobbies => prevLobbies.filter(lobby => lobby.timeout > Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, [setLobbies]);

  // useEffect(() => {
  //   console.log('Current lobbies:', lobbies); // Log the current lobbies
  // }, [lobbies]);

  const formatTime = (timeout:number) => {
    const remainingTime = timeout - Date.now();
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    
    <div className='container-inner'>
      <div className="Lobby">
      {/* <button onClick={() => addLobby('New Lobby', 4, "M24", 2)}>Add Lobby</button> */}
      {/* <Link to="/createlobby" className="title">
        <button>createlobby</button>
      </Link> */}
        {lobbies.map(lobby => (
          <div key={lobby.id} className="lobby-detail">
            <img src={lobby.image} alt="" />
            <span>{lobby.name}</span>
            <span>
              <div>time remain:</div>
              <div>{formatTime(lobby.timeout)}</div>
            </span>
            <span>{`Players: ${lobby.currentPlayers}/${lobby.maxPlayers}`}</span>
            <button onClick={() => joinLobby(lobby.id)}>Join</button>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Lobby;