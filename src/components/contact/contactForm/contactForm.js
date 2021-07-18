import { faLocationArrow, faMailBulk, faMapMarker, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './contactForm.css'

const ContactForm = () => {
    return (
        <div className="contact-form">
            <div className="contact-form-content">
                <div className="contact-form-left">
                    <div className="contact-form-left-content">
                        <div className="contact-form-left-text-group">
                            <FontAwesomeIcon icon={faMapMarker} size="2x"/>
                            <p className="contact-form-text-group">Our Location text here</p>
                        </div>
                        <div className="contact-form-left-text-group">
                            <FontAwesomeIcon icon={faMailBulk} size="2x"/>
                            <p className="contact-form-text-group">Our Location text here</p>
                        </div>
                        <div className="contact-form-left-text-group">
                            <FontAwesomeIcon icon={faPhone} size="2x"/>
                            <p className="contact-form-text-group">Our Location text here</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form-form">
                    <div className="contact-form-flex">
                        <div className="input-group-small">
                            <label>First Name</label>
                            <input className="contact-input" type="text" required placeholder="Enter your Name"/>
                        </div>
                        <div className="input-group-small">
                            <label>Last Name</label>
                            <input className="contact-input" type="text" required placeholder="Enter your Name"/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input className="contact-input-long" type="email" required placeholder="Enter your Email"/>
                    </div>
                    <div className="input-group">
                        <label>Whatsapp Phone Numer</label>
                        <input className="contact-input-long" type="tel" required placeholder="Enter your Whatsapp Telephone number"/>
                    </div>
                    <div className="input-group">
                        <label>Message</label>
                        <textarea className="contact-text-long" type="email" required placeholder="Enter your Message"/>
                    </div>
                    <button className="submit-button">
                        Submit
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
