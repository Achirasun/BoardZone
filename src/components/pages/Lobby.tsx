import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './Lobby.css';
import { RxAvatar } from "react-icons/rx";
import { useLobby } from "../../data/LobbyData"
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../../data/UserContext"
import axios from 'axios';

interface LobbyDetail {
  //ส่วนทำงานจากเครื่อง
id: number;
image: string;
name: string;
maxPlayers: number;
currentPlayers: number;
timeout: number;

  //ส่วนผู้ใช้ input
place: string;
}


export const Lobby = () => {
  // const [lobbies, setLobbies] = useState<LobbyDetail[]>([]);
  const { lobbies, addLobby, joinLobby, setLobbies } = useLobby();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const userlobby = userContext?.userLobby

  useEffect(() => {
    const interval = setInterval(async () => {
      const now = Date.now();

      // Filter out expired lobbies and delete them from the backend
      const expiredLobbies = lobbies.filter(lobby => lobby.timeout <= now || lobby.currentPlayers <= 0);
      for (const lobby of expiredLobbies) {
        try {
          await axios.delete(`http://localhost:8080/api/lobbies/delete?lobby_id=${userlobby}`);
          console.log(`Deleted lobby with ID: ${userlobby} (${lobby.id})`);
          userContext?.setUserLobby(null);
        } catch (error) {
          console.error(`Failed to delete lobby with ID: ${userlobby}`, error);
        }
      }
      setLobbies(prevLobbies => prevLobbies.filter(lobby => lobby.timeout > now && lobby.currentPlayers > 0));
      console.log('Hello, User ID:', userContext?.userId);
    }, 1000);

    return () => clearInterval(interval);
  }, [setLobbies]);

  const formatTime = (timeout:number) => {
    const remainingTime = timeout - Date.now();
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleLobbyClick = (lobby: LobbyDetail) => {
    navigate(`/lobby/${lobby.id}`, { state: lobby });
  };
  
  return (
    
    <div className='container-inner'>
      <div className="Lobby">
      {/* <button onClick={() => addLobby('New Lobby', 4, "M24", 2)}>Add Lobby</button> */}
      {/* <Link to="/createlobby" className="title">
        <button>createlobby</button>
      </Link> */}
      
        {lobbies.length === 0 ? (
          <Link to="/boardgame" className="title">
            <div className="no-lobbies">Be the first to PLAY</div>
          </Link>
        ) : (
        lobbies.map(lobby => (
          <div key={lobby.id} className="lobby-detail" onClick={() => handleLobbyClick(lobby)}>
            <img src={lobby.image} alt="" />
            <span className='title'>{lobby.name}</span>
            <span>
              <div >Time remain:</div>
              <div>{formatTime(lobby.timeout)}</div>
            </span>
            <span>{`Players: ${lobby.currentPlayers}/${lobby.maxPlayers}`}</span>
            
            {userlobby ? (
                <button style={{ backgroundColor: 'gray' }} disabled>Joined</button>
              ) : (
                <button onClick={(e) => { e.stopPropagation(); joinLobby(lobby.id); }}>Join</button>
              )}
          </div>
        ))
        )}
      </div>
    </div>
    
  );
}

export default Lobby;