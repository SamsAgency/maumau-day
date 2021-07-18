import React from 'react'
import logo from '../../assets/logo.png'
import './navgroup.css'

const Navgroup = () => {
    return (
        <div className="navigation-group">
            <div className="navigation-group-content">
                <img className="logo" src={logo} alt="international Maumau day logo"/>
                <div className="navbar-header">
                    <p className="navbar-text">International Maumau Day</p>
                </div>
            </div>           
        </div>
    )
}

export default Navgroup