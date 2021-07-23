import React from 'react'
import './vision.css'

const Vision = () => {
    return (
        <div className="vision">
            <div className="vision-content">
                <div className="vision-content-right">
                    <h3 className="vision-content-right-title">What our vision is</h3>
                    <p className="vision-comtent-right-p">
                        Towards a radical unified anti-imperialist  Pan-African struggle based on protracted and 
                        sustainable pan African and Afrocentric Nation building. 
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
