import { faApplePay, faBitcoin, faBtc, faCcAmazonPay, faCcMastercard, faCcStripe, faCcVisa, faFacebookSquare, faInstagramSquare, faPaypal, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faWindowRestore } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="footer-content-left-upper">
                        <h3 className="footer-content-left-upper-h3">Lorem Ipsum text</h3>
                    </div>

                    <div className="footer-socialmedia">
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                        <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                        <FontAwesomeIcon icon={faInstagramSquare} size="2x"/>
                        <FontAwesomeIcon icon={faYoutubeSquare} size="2x"/>
                    </div>

                    <div className="footer-content-left-bottom">
                        <p className="footer-left-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className="footer-middle-content">
                    <h3 className="footer-middle-title">Lorem ipsum</h3>
                    <ul className="footer-ul">
                        <li className="footer-li">Home</li>
                        <li className="footer-li">About</li>
                        <li className="footer-li">History</li>
                        <li className="footer-li">Events</li>
                        <li className="footer-li">Contact</li>
                    </ul>
                </div>
            
                <div className="footer-content-right">
                    <div className="footer-content-right-upper">
                        <h3 className="footer-content-right-upper-h3">Lorem Ipsum text</h3>
                    </div>
                    
                    <form className="footer-content-form">
                        <input className="footer-input" />
                        <button className="footer-content-button">
                            Fubmit 
                            <FontAwesomeIcon icon={faPaperPlane} size="1x"/>
                        </button>
                    </form>

                    <div className="footer-content-right-bottom">
                        <FontAwesomeIcon icon={faPaypal} size="2x"/>
                        <FontAwesomeIcon icon={faCcVisa} size="2x"/>
                        <FontAwesomeIcon icon={faCcMastercard} size="2x"/>
                        <FontAwesomeIcon icon={faApplePay} size="2x"/>
                        <FontAwesomeIcon icon={faBtc} size="2x"/>
                        <FontAwesomeIcon icon={faCcStripe} size="2x"/>
                        <FontAwesomeIcon icon={faCcAmazonPay} size="2x"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
