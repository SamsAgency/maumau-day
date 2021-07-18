import React from 'react'
import './authForm.css'

const authForm = () => {
    return (
        <div className="auth-form">
            <form className="the-form">
                <div className="input-group">
                    <label>Email</label>
                    <input className="input" type="email" placeholder="Enter your email..." />
                </div>
                <br/>
                <div className="input-group">
                    <label>Password</label>
                    <input className="input" type="password" placeholder="Enter your password..." />
                </div>
                
                <button className="login-button">Submit</button>
            </form>
        </div>
    )
}

export default authForm
