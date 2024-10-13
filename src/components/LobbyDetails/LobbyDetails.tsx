import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import './LobbyDetails.css';

interface LobbyDetailProps {
  id: number;
  image: string;
  name: string;
  maxPlayers: number;
  currentPlayers: number;
  timeout: number;
  place: string;
}

const LobbyDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lobby = location.state as LobbyDetailProps;

  const [remainingTime, setRemainingTime] = useState(lobby.timeout - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(lobby.timeout - Date.now());

    }, 1000);

    

    return () => clearInterval(interval);
  }, [lobby.timeout]);

  if (!lobby) {
    return (
      <div className="container-inner">
        <h1>No Lobby details available!</h1>
      </div>
    );
  }

  

  const formatTime = (timeout: number) => {
    const remainingTime = timeout - Date.now();
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);

    if (remainingTime <= 0) {
      navigate('/lobby'); // Navigate back when time hits 0
    }
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div >
      <div className="header">
        <button className="back-button" onClick={() => navigate("/lobby")}>Back</button>
        <Link to="/lobby" className="title">
          BOARD<IoStar color='ffc228'/>ZONE
        </Link>
      </div>
        
        <div className="LobbyDetails">
          <h1>{lobby.name}</h1>
          <div className="whitespace-pre-wrap"/>
          <div className="image-section">
            <img src={lobby.image} alt={lobby.name} />
          </div>

          <h2 className="lobby-title">Player: {lobby.currentPlayers} / {lobby.maxPlayers}</h2>
          <p className="location">Location: {lobby.place}</p>
          <p className="time-remaining">Time remaining: {formatTime(lobby.timeout)}</p>
          <button className="leave-button" onClick={() => navigate(-1)}>Leave Table</button>

        </div>
        
    </div>
    // <div className="lobbydetail container-inner">
    //   <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    //   <div className="main-content">
    //     <div className="image-section">
    //       <img src={lobby.image} alt={lobby.name} />
    //     </div>
    //     <div className="description">
    //       <h1 className="lobby-title">{lobby.name}</h1>
    //       <p className="location">Location: {lobby.place}</p>
    //       <p className="time-remaining">Time remaining: {formatTime(lobby.timeout)}</p>
    //       <button className="leave-button" onClick={() => navigate(-1)}>Leave Table</button>
    //     </div>
    //   </div>
    // </div>

    
  );
};

export default LobbyDetails;
