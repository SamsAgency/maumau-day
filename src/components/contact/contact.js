import React from 'react'
import Footer from '../home/footer/footer'
import Navbar from '../home/navbar/navbar'
import Navgroup from '../navigroup/navgroup'
import ContactBanner from './contactBanner/contactBanner'
import ContactForm from './contactForm/contactForm'

const Contact = () => {
    return (
        <div className="contact">
            <Navgroup/>
            <Navbar/>
            <ContactBanner/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Contact
