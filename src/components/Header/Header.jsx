import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'


function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="Logo" className='logo'/>

        <ul className="header-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why Use</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header