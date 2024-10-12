import React, { useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import { MdOutlinePassword } from "react-icons/md";
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';

const InputRegister: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !confirmpassword) {
      setError('Username and Password cannot be empty');
      return;
    } else
    if (password != confirmpassword) {
        setError('Password and Confirm Password\nmust be the same');
        return;
      }

    setError('');
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your login logic here
    navigate('/');
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
      <div className="form-group">
        <div className="avatar-container">
          <MdOutlinePassword color='#4E4E4E' />
        </div>
        <input
          type="password"
          placeholder="Confirm Password"
          className="input__box"
          value={confirmpassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
      </div>
      {error && <p className='error-message'>{error}</p>}
      <div className="form-group">
          <button type='submit' className='input__submit'>Sign Up</button>
      </div>
    </form>
  );
};

export default InputRegister;
