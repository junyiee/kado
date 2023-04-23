import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars, FaShoppingCart, FaRegUser } from 'react-icons/fa'
import logo from '../../assets/olive.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={logo} alt="olive icon" className="logo" />olive
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes color='#fff' /> : <FaBars color='#fff' />}
                </div>
                {/* set active state of mobile navbar */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            onClick={closeMobileMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            onClick={closeMobileMenu}
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            onClick={closeMobileMenu}
                        >
                            Updates
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            onClick={closeMobileMenu}
                        >
                            <FaRegUser />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                "nav-links" + (isActive ? " activated" : "")
                            }
                            onClick={closeMobileMenu}
                        >
                            <FaShoppingCart />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar