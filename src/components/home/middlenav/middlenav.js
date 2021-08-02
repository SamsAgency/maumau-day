import React from 'react'
import { NavLink } from 'react-router-dom'
import './middlenav.css'

const middlenav = () => {
    return (
        <div className="middlenav">
            <div className="middle-navbar-content">
                <ul className="middle-navbar-ul">
                    <NavLink to="/revoutions" className="middle-navbar-li">Revolution Solidarities eg West Papua</NavLink>
                    <NavLink to="/programmes" className="middle-navbar-li">MauMau Journal</NavLink>
                    <NavLink to="/maumauTv" className="middle-navbar-li"> Maumau Live Tv </NavLink>
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
                <div className="middle-nav-marquee-content">
                    <p className="middle-nav-marquee-p">
                        <span>Vision: </span>Towards a radical unified anti-imperialist Pan-African struggle based on 
                        protracted & sustainable pan African & Afrocentric Nation building. 
                        <span>         Mission: </span>To lobby & unite bona-fide revolutionary Africans universally 
                        in mass Afro-centered resource & capacity building in the eternal commitment to the <span style={{color: 'green'}}>RACE FIRST</span> & Perennial Re-educational establishment.
                    
                        <span>Updates: </span> The international Mau Mau day committee is currently organizing and centralizing the annual international 
                         Mau Mau day 2022 Kenya, Jamaica, United Kingdom, South Africa, Ghana, Tanzania, Malawi, Rwanda ....
                    </p>
                </div>
            </marquee>
        </div>
    )
}

export default middlenav
