import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-left">

            </div>
            <div className="banner-right">
                <marquee direction="up" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" className="banner-quote">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages,
                        <br/> and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </marquee>
            </div>
        </div>
    )
}

export default Banner
