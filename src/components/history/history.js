import React from 'react'
import Navbar from '../home/navbar/navbar'
import Navgroup from '../navigroup/navgroup'
import HistoryContent from './historyContent/historyContent'
import Footer from '../home/footer/footer'

const History = () => {
    return (
        <div className="history">
            <Navgroup/>
            <Navbar/>
            <HistoryContent/>
            <Footer/>
        </div>
    )
}

export default History
