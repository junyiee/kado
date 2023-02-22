import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <section className='newsletter'>
                    <h3>Newsletter</h3>
                    <p>Subscribe for updates!</p>
                    <div className='footer-form'>
                        <form>
                            <input
                                type='email'
                                name='email'
                                placeholder='Your Email'
                            />
                            <input
                                type='text'
                                name='name'
                                placeholder='Your Name'
                            />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                </section>
                <div>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <section className='socials'>
                        Socials
                    </section>
                    <small>Junyiee &copy; 2023</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer