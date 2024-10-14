import React, { useContext, useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import { MdOutlinePassword } from "react-icons/md";
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../data/UserContext';
import axios from 'axios';

const InputUsername: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and Password cannot be empty');
      return;
    }

    setError('');
    try {
      // Axios POST request to register user
      const response = await axios.post('http://localhost:8080/api/users/login', {
        user_name: username,
        user_password: password,
      });
      const checkPassword = response.data.user_id;
      if (checkPassword) {
        const userId = checkPassword;
        console.log('Login successful, User ID:', userId);
        userContext?.setUserId(userId);
        navigate('/');
      } else {
        setError('Username or Password wrong');
        return;
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="avatar-container">
          <RxAvatar color='#4E4E4E' />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="input__box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="avatar-container">
          <MdOutlinePassword color='#4E4E4E' />
        </div>
        <input
          type="password"
          placeholder="Password"
          className="input__box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className='error-message'>{error}</p>}
      <div className="form-group">
          <button type='submit' className='input__submit'>Log in</button>
      </div>
    </form>
  );
};

export default InputUsername;
