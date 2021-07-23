import React from 'react'
import { NavLink } from 'react-router-dom'
import './middlenav.css'

const middlenav = () => {
    return (
        <div className="middlenav">
            <div className="middle-navbar-content">
                <ul className="middle-navbar-ul">
                    <NavLink to="/" className="middle-navbar-li">Revolution Solidarities eg West Papua</NavLink>
                    <NavLink to="/programmes" className="middle-navbar-li">MauMau Journal</NavLink>
                    <NavLink to="/about" className="middle-navbar-li"> Maumau Live Tv </NavLink>
                    <NavLink to="/events" className="middle-navbar-li"> Maumau Podcast</NavLink>
                </ul>
                <ul className="middle-navbar-ul">
                    <NavLink to="/library" className="middle-navbar-li">Book Attendance</NavLink>
                    <NavLink to="/library" className="middle-navbar-li">Library Research</NavLink>
                    <NavLink to="/library" className="middle-navbar-li">Maumau History</NavLink>
                    <NavLink to="/library" className="middle-navbar-li">Repratriation and National Building</NavLink>
                </ul>
            </div>
            <marquee className="middle-nav-marquee">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </marquee>
        </div>
    )
}

export default middlenav
