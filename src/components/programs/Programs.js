import React from 'react'
import Footer from '../home/footer/footer'
import Navbar from '../home/navbar/navbar'
import Navgroup from '../navigroup/navgroup'
import ProgramBanner from './programBanner/programBanner'
import './programs.css'
import ProgramContent from './programsContent/programContent'

const Programs = () => {
    return (
        <div className="programs">
            <Navgroup/>
            <Navbar/>
            <ProgramBanner/>
            <ProgramContent/>
            <Footer/>
        </div>
    )
}

export default Programs
