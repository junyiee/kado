import React from 'react'
import '../styles/Login.css'

function Login() {
    return (
        <div className="login-container">
            <h1>Log In</h1>
            <form className="login-form">
                <input
                    className="login-input"
                    type="email"
                    name='email'
                    placeholder='Email'
                    required
                />
                <input
                    className="login-input"
                    type="password"
                    name='pw'
                    placeholder='Password'
                    required
                />
                <button className="login-btn" type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login