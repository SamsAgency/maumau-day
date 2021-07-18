import React from 'react'
import './vision.css'

const Vision = () => {
    return (
        <div className="vision">
            <div className="vision-content">
                <div className="vision-content-right">
                    <h3 className="vision-content-right-title">What our vision is</h3>
                    <p className="vision-comtent-right-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                        in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="vision-content-left">
                    <iframe className="about-iframe" src="https://www.youtube.com/embed/kulsIvTvTjI" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>

                    </iframe>
                    {/* <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div>
            </div>
        </div>
    )
}

export default Vision
