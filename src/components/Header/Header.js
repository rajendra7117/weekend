import React from 'react'
import logo from '../../Images/header-img.png'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <span className='logo'>
        <img src={logo}/>
        <h3>week-end</h3>
        </span>
        <span className='login'>
            <h4>Login</h4>
        </span>
    </div>
  )
}

export default Header