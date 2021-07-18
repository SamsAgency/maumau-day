import React from 'react'
import './Bod.css'
import cardOne from '../../../assets/carousel1.jpeg'
// import cardOne from '../../../assets/carousel1.jpeg'
// import cardOne from '../../../assets/carousel1.jpeg'
// import cardOne from '../../../assets/carousel1.jpeg'

const Bod = () => {
    return (
        <div className="bod">
            <div className="bod-top">
                <h3 className="bod-top-h3">
                    Board of directors
                </h3>
            </div>            
            <div className="bod-bottom">
                <div className="bod-bottom-cards">
                    <div className="bod-card">
                        <div className="bod-card-image">
                            <img src={cardOne} className="card-image" alt="board of directors"/>
                        </div>
                        <h4 className="bod-names">Name 1</h4>
                        <p className="bod-content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>

                    <div className="bod-card">
                        <div className="bod-card-image">
                            <img src={cardOne} className="card-image" alt="board of directors"/>
                        </div>
                        <h4 className="bod-names">Name 1</h4>
                        <p className="bod-content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    
                    <div className="bod-card">
                        <div className="bod-card-image">
                            <img src={cardOne} className="card-image" alt="board of directors"/>
                        </div>
                        <h4 className="bod-names">Name 1</h4>
                        <p className="bod-content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    
                    <div className="bod-card">
                        <div className="bod-card-image">
                            <img src={cardOne} className="card-image" alt="board of directors"/>
                        </div>
                        <h4 className="bod-names">Name 1</h4>
                        <p className="bod-content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bod
