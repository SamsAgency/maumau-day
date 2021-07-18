import React from 'react'
import Footer from '../home/footer/footer'
import Navbar from '../home/navbar/navbar'
import Navgroup from '../navigroup/navgroup'
import AuthBanner from './authBanner/authBanner'
import AuthForm from './authForm/authForm'

const Auth = () => {
    return (
        <div className="auth">
            <Navgroup/>
            <Navbar/>
            <AuthBanner/>
            <AuthForm/>
            <Footer/>
        </div>
    )
}

export default Auth
