import React from 'react'
import './about.css'
import Copyright from '../home/Copyright/copyright'
import Footer from '../home/footer/footer'
import Navbar from '../home/navbar/navbar'
import Navgroup from '../navigroup/navgroup'
import AboutBanner from './aboutBanner/aboutBanner'
import BackgroundImg from './BackgroundImg/backgroundImg'
import Mission from './mission/mission'
import Vision from './vision/vision'
import UpEvents from './upEvents/upEvents'

const About = () => {
    return (
        <div className="about">
            <Navgroup/>
            <Navbar/>
            <AboutBanner/>
            <Mission/>
            <BackgroundImg/>
            <Vision/>
            <UpEvents/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default About
