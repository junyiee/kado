import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
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
                        <button type='submit'>Subscribe</button>
                    </form>
                </section>
                <div>
                    <ul className='footer-list'>
                        <li>
                            <Link to='/' className='footer-links'>About Us</Link>
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                    <section className='socials'>
                        <ul className='socials-list'>
                            <li className='socials-item'>
                                <Link to='/' className='socials-links'>Discord</Link>
                            </li>
                            <li className='socials-item'>
                                <Link to='/' className='socials-links'>Instagram</Link>
                            </li>
                            <li className='socials-item'>
                                <Link to='/' className='socials-links'>Youtube</Link>
                            </li>
                        </ul>
                    </section>
                    <small>Junyiee &copy; 2023</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer