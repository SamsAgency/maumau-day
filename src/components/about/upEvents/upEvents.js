import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import imgOne from '../../../assets/carousel2.jpeg'
import './upEvents.css'

const UpEvents = () => {
    return (
        <div className="up-events">
            <div className="up-events-content">
                <div className="up-events-top">
                    <h3 className="up-events-h3">Up coming events</h3>
                </div>
                <div className="up-events-bottom">
                    <div className="up-events-card">
                        <img className="up-event-images" src={imgOne} alt="events"/>
                        <h4 className="up-events-title">Title 1</h4>
                        <p className="up-events-content-paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry.
                        </p>
                        <NavLink to="/events">
                            <FontAwesomeIcon icon={faArrowRight}  size="4x" color="white" />
                        </NavLink>
                    </div>

                    <div className="up-events-card">
                        <img className="up-event-images" src={imgOne} alt="events"/>
                        <h4 className="up-events-title">Title 1</h4>
                        <p className="up-events-content-paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry.
                        </p>
                        <NavLink to="/events">
                            <FontAwesomeIcon icon={faArrowRight}  size="4x" color="white" />
                        </NavLink>
                    </div>

                    <div className="up-events-card">
                        <img className="up-event-images" src={imgOne} alt="events"/>
                        <h4 className="up-events-title">Title 1</h4>
                        <p className="up-events-content-paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry.
                        </p>
                        <NavLink to="/events">
                            <FontAwesomeIcon icon={faArrowRight}  size="4x" color="white" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpEvents
