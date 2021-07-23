import React from 'react'
import './maumautv.css'
import Navgroup from '../../navigroup/navgroup'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import Maumauvideo from './maumauvideo/Maumauvideo'

const MaumauTv = () => {
    return (
        <div className="maumautv">
            <Navgroup/>
            <Navbar/>
            <Maumauvideo/>
            <Footer/>
        </div>
    )
}

export default MaumauTv
