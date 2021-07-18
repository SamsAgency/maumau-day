import React from 'react'
import './mission.css'

const Mission = () => {
    return (
        <div className="mission">
            <div className="mission-content">
                <div className="mission-content-left">
                    <iframe className="about-iframe" src="https://www.youtube-nocookie.com/embed/_hEiWzPbPso" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>

                    </iframe>
                </div>
                <div className="mission-content-right">
                    <h3 className="mission-content-right-title">What our mission is</h3>
                    <p className="mission-comtent-right-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                        in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mission
