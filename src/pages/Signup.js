import React from 'react'
import '../styles/Login.css'

function Signup() {
  return (
    <div className="signup">
            <h1>Create Account</h1>
            <form className="form">
            <input
                    className="input"
                    type="text"
                    name='user'
                    placeholder='Username'
                    required
                />
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
                <button type='submit'>Create</button>
            </form>
        </div>
  )
}

export default Signup