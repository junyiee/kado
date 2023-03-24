import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-wrap'>
                <section className='newsletter'>
                    <form className='footer-form'>
                        <h3>Newsletter</h3>
                        <p>Subscribe for updates!</p>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Your Email'
                        />
                        <button className='footer-button' type='submit'>Subscribe</button>
                    </form>
                </section>
                <section className='contact-us'>
                    <h4>Contact Us</h4>
                    JUNNY
                    <br />
                    Mon-Fri 10am-8pm
                    <br />
                    jimbo@mail.com
                </section>
            </div>
            <section className='socials'>
                <small className='rights'>Junyiee &copy; 2023</small>
                <ul className='socials-list'>
                    <li className='socials-item'>
                        <Link to='/' className='socials-links'>
                            <FaDiscord />
                        </Link>
                    </li>
                    <li className='socials-item'>
                        <Link to='/' className='socials-links'>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li className='socials-item'>
                        <Link to='/' className='socials-links'>
                            <FaYoutube />
                        </Link>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer