import './liveradio.css'
import React from 'react'
import Logo from '../../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faHeadset } from '@fortawesome/free-solid-svg-icons'

const Liveradio = () => {
    return (
        <div className="live-radio" >
            <div className="live-radio-content">
                <div className="radio-left">
                    <div className="radio-left-left">
                        <img src={Logo} className="radio-logo" alt="International maumau logo"/>
                    </div>
                    <div className="radio-left-right">
                        <div className="radio-left-right-middle">
                            <p className="radio-left-right-middle-p">
                                International MauMau Day
                            </p>
                        </div>
                        <div className="radio-left-right-bottom">
                            <button className="donate-button">Donate <FontAwesomeIcon icon={faDollarSign}/> </button>
                        </div>
                    </div>
                </div>
                <div className="radio-right">
                    <div className="radio-right-upper">
                        <h3 className="radio-upper-title">Conscious MauMau Radio</h3>
                        <button className="the-radio-button"> Play <FontAwesomeIcon icon={faHeadset} color="white"/> Radio</button>
                    </div>

                    <div className="radio-right-lower">
                        <p className="radio-right-lower-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy is simply dummy text of the printing and typesetting Ipsum 
                            is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Liveradio
