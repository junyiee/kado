import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <h1>Log In</h1>
            <form className="form">
                <input
                    className="input"
                    type="email"
                    name='email'
                    placeholder='Email'
                    required
                />
                <input
                    className="input"
                    type="password"
                    name='pw'
                    placeholder='Password'
                    required
                />
                <Link to='/' className="forgot-pw">Forgot you password?</Link>
                <button type='submit'>Log In</button>
            </form>
            <div className="register">
                <p>Don't have an account?</p>
                <Link to='/signup' className="reg-link">SIGN UP HERE</Link>
            </div>
        </div>
    )
}

export default Login