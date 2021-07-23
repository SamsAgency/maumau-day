import React from 'react'
import './mission.css'

const Mission = () => {
    return (
        <div className="mission">
            <div className="mission-content">
                <div className="mission-content-left">
                    <iframe className="about-iframe" src="https://www.youtube.com/embed/OlNTUOxa_3A"
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>

                    </iframe>
                </div>
                <div className="mission-content-right">
                    <h3 className="mission-content-right-title">What our mission is</h3>
                    <p className="mission-comtent-right-p">
                        To lobby and unite bona-fide revolutionary Africans universally in  mass Afro-centered 
                        resource and  capacity  building in the eternal commitment to the RACE FIRST and Perenial Re-educational establishment.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mission
