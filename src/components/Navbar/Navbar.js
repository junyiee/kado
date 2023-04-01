import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars, FaShoppingCart, FaRegUser } from 'react-icons/fa'
import logo from '../../assets/olive.svg'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="olive icon" className="logo" />olive
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? <FaTimes /> : <FaBars />} />
                </div>
                {/* set active state of mobile navbar */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Updates
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            <FaRegUser />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                            <FaShoppingCart />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar