import React from 'react'
import { Link } from 'react-router-dom'
import atriaesportslogo from '../assets/images/atriaesportslogo.jpg'
import './Header.css'

const Header = () => {
  return (

    <header>
      <div className="header">
        <div className="navWrapper">
          <span class="material-symbols-outlined">
            menu
          </span>
        </div>
        <div className='logo'>
          <img src={atriaesportslogo} alt="Logo" style={{ borderRadius: "100%" }} />
        </div>

        <nav className="navigation">
          <Link className='link' to={'/'}>Home</Link>
          <Link className='link' to={'/events'}>Events</Link>
          <Link className='link' to={'/sponsers'}>Sponser's</Link>
          <Link className='link' to={'/contact'}>Contact</Link>
          <Link className='link' to={'/about'}>About</Link>
        </nav>

        <div className="authentication">

          <div className="login">
            <button className='loginBtn'>Login</button>
          </div>

          <div className="signup">
            <button className="signupBtn">Signup</button>
          </div>

          <div className="profile">
            <span class="material-symbols-outlined">
              account_circle
            </span>
          </div>

        </div>



      </div>
    </header>


  )
}

export default Header