import React from 'react'
import Bar from '../home/bar/bar'
import Footer from '../home/footer/footer'
import Navbar from '../home/navbar/navbar'
import Navgroup from '../navigroup/navgroup'
import LibraryBanner from './LibraryBanner/libraryBanner'
import LibraryContent from './LibraryContent/libraryContent'

const Library = () => {
    return (
        <div className="library">
            <Navgroup/>
            <Navbar/>
            <LibraryBanner/>
            <Bar/>
            <LibraryContent/>
            <Footer/>
        </div>
    )
}

export default Library
