import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { MdOutlinePassword } from "react-icons/md";
import './styles.css';

const InputUsername = () => {
  return (
    <form>
        {/* <RxAvatar />
        <input type='input' placeholder='Username' className='input__box' ></input>
        <RxAvatar />
        <input type='password' placeholder='Password' className='input__box' /> */}

        <div className="form-group">
          <div className="avatar-container">
            <RxAvatar color='#4E4E4E' />
          </div>
          <input type="text" placeholder="Username" className="input__box" />
        </div>
        <div className="form-group">
          <div className="avatar-container">
            <MdOutlinePassword color='#4E4E4E' />
          </div>
          <input type="password" placeholder="Password" className="input__box" />
        </div>
        <div className="form-group">
          <button type='submit' className='input__submit'>Log in</button>
        </div>

        
    </form>
  )
}

export default InputUsername