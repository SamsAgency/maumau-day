import React from 'react'
import './libraryContent.css'
import imgOne from '../../../assets/carousel2.jpeg'

const LibraryContent = () => {
    return (
        <div className="library-content">
            <div className="library-content-content">
                <div className="library-content-row">
                    <div className="library-content-card">
                        <img src={imgOne} alt="Mau mau"/>
                        <p className="library-content-card-p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>
                        <p className="library-content"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibraryContent
