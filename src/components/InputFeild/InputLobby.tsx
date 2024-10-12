import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { FaRegClock, FaLocationDot } from "react-icons/fa6";
import { useLobby } from '../../data/LobbyData';


const InputLobby: React.FC = () => {
  const [inputplace, setPlace] = useState('');
  const [inputtime, setTime] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { lobbies, addLobby, joinLobby, setLobbies } = useLobby();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputplace || !inputtime) {
      setError('Place and Time to play cannot be empty');
      return;
    }

    setError('');
    console.log('Input Place:', inputplace);
    console.log('Input Time:', inputtime, 'minute');
    // Add your login logic here
    addLobby('BoardGame Gu Yaik Tai', 8, inputplace, parseInt(inputtime));
    
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
          placeholder="Place"
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
          placeholder="Time to Play (minute)"
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
