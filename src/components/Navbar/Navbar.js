import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-title'>olive</Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>Shop</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>Updates</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>Account</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar