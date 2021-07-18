import React from 'react'
import Navgroup from'../navigroup/navgroup'
import Navbar from './navbar/navbar'
import Banner from './banner/banner'
import Bar from './bar/bar'
import Liveradio from './liveradio/liveradio'
import Footer from './footer/footer'
import Middlenav from './middlenav/middlenav'
import Bod from './BOD/Bod'
import Copyright from './Copyright/copyright'

const home = () => {
    return (
        <div className="homepage">
            <Navgroup/>
            <Navbar/>
            <Banner/>
            <Bar/>
            <Liveradio/>
            <Middlenav/>
            <Bod/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default home
