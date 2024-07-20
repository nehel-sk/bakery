import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assests/logo.jpg'
import { BiMessage } from "react-icons/bi";

function Navbar() {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
           
            <img src={logo} alt="logo" className='logo'/>
            
            
            <div className='navbar-list'>
                <Link to='/' className="navbar-list-item">Home</Link>
                <Link to='/aboutUs' className="navbar-list-item">About Us</Link>
                <Link to='/menu' className="navbar-list-item">Menu</Link>
                <Link to='/contactUs' className="navbar-list-item">Contact Us</Link>
          
            </div>
            <div className="contact-btn">
                <button>
                <BiMessage className='contact-btn-icon'/> Contact Us
                </button>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar