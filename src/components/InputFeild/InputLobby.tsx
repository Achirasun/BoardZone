import React, { useState, useContext } from 'react';
import './styles.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegClock, FaLocationDot } from "react-icons/fa6";
import { useLobby } from '../../data/LobbyData';
import { UserContext } from '../../data/UserContext';
import axios from 'axios';

const InputLobby = () => {
  const [inputplace, setPlace] = useState('');
  const [inputtime, setTime] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { lobbies, addLobby, joinLobby, setLobbies } = useLobby();
  const location = useLocation();
  const { id, name, maxPlayer, iMage } = location.state as { id: number; name: string; maxPlayer: number; iMage: string };
  const userContext = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputplace || !inputtime) {
      setError('Place and Time to play cannot be empty');
      return;
    }

    setError('');
    try {
      // Axios POST request to register user
      const timenow = Date.now();
      const timeout = timenow + (parseInt(inputtime) * 60000)
      const response = await axios.post(`http://localhost:8080/api/lobbies/create?boardgame_id=${id}`, {
        lobby_description : inputplace,
        lobby_created_at : timenow,
        lobby_ended_at : timeout
      });
      const lobbyId = response.data.lobby_id;
      console.log('Create Lobby successful, Lobby ID:', lobbyId);
      userContext?.setUserLobby(lobbyId);
      const joinresponse = await axios.post(`http://localhost:8080/api/lobbies/join?user_id=${userContext?.userId}&?lobby_id=${lobbyId}`);
      navigate('/');
    } catch (error) {
      console.error('Create Lobby failed:', error);
      setError('Create Lobby failed. Please try again.');
    }
  
    // Add your login logic here
    addLobby(name, maxPlayer, iMage, inputplace, parseInt(inputtime));
    
    navigate('/lobby');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="avatar-container">
        <FaLocationDot color='#4E4E4E' />
        </div>
        <input
          type="text"
          placeholder="Location"
          className="input__box"
          value={inputplace}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="avatar-container">
          <FaRegClock color='#4E4E4E' />
        </div>
        <input
          type="number"
          placeholder="Time (minute)"
          className="input__box"
          value={inputtime}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      {error && <p className='error-message'>{error}</p>}
      <div className="form-group">
          <button type='submit' className='input__submit_green'>Create</button>
      </div>
    </form>
  );
};

export default InputLobby;
