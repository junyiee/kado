import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa'
// import logo from '../../assets/olive.svg'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-wrap'>
                <section className='newsletter'>
                    <form className='footer-form'>
                        <h4>Newsletter</h4>
                        <p>Subscribe for updates, restocks, upcoming projects and more!</p>
                        <input
                            className='footer-input'
                            type='email'
                            name='email'
                            placeholder='Your Email'
                        />
                        <button type='submit'>Subscribe</button>
                    </form>
                </section>
                <section className="footer-menu">
                    <ul className="footer-list">
                        <li className="footer-item">
                            <Link to='/' className='footer-links'>
                                About Us
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link to='/' className='footer-links'>
                                FAQs
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link to='/' className='footer-links'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="socials">
                    <h4>Follow Us</h4>
                    <ul className='socials-list'>
                        <li>
                            <Link to='/' className='socials-links'>
                                <FaDiscord />
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='socials-links'>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='socials-links'>
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </section>
                {/* <section className='contact-us'>
                    <h4>Contact Us</h4>
                    JUNNY
                    <br />
                    Mon-Fri 10am-8pm
                    <br />
                    jimbo@mail.com
                </section> */}
            </div>
            <section className='bottom'>
                {/* <Link to='/' className="logo-link">
                    <img src={logo} alt="olive icon" className="logo" />olive
                </Link> */}
                <small className='rights'>Junyiee &copy; 2023</small>
            </section>
        </footer>
    )
}

export default Footer