import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <ul className="navbar-ul">
                    <NavLink to="/" className="navbar-li">Home</NavLink>
                    <NavLink to="/about" className="navbar-li">About</NavLink>
                    <NavLink to="/programmes" className="navbar-li">Programmes</NavLink>
                    <NavLink to="/events" className="navbar-li">Events</NavLink>
                    <NavLink to="/library" className="navbar-li">Library</NavLink>
                    <NavLink to="/contact" className="navbar-li">Contacts</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
