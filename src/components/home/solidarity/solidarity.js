import React, { useState } from 'react'
import Navgroup from '../../navigroup/navgroup'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import Nyahbinghi from './Nyahbinghi/Nyahbinghi'
import Westpapua from './Westpapua/Westpapua'
import BoboAshanti from './BoboAshanti/boboAshanti'
import Chimurenga from './Nyahbinghi/Nyahbinghi'
import JamMaroons from './JamMaroons/jamMaroons'

const Solidarity = () => {
    const [revolution, setRevolution] = useState('westpapua')

    const switchTabs = () => {
        if (revolution === 'westpapua'){
            return <Westpapua/>
        }
        if (revolution === 'nyahbinghi'){
            return <Nyahbinghi/>
        }
        if (revolution === 'boboashanti'){
            return <BoboAshanti/>
        }
        if (revolution === 'chimurenga'){
            return <Chimurenga/>
        }
        if (revolution === 'maroons'){
            return <JamMaroons/>
        }
    }

    return (
        <div className="solidarity">
            <Navgroup/>
            <Navbar/>

            <div className="solidarity-content">
                <div className="solidarity-content-tabs">
                    <button onClick={() => setRevolution('westpapua')} className="solidarity-tabs">Westpapua</button>
                    <button onClick={() => setRevolution('nyahbinghi')} className="solidarity-tabs">Nyahbinghi</button>
                    <button onClick={() => setRevolution('boboashanti')} className="solidarity-tabs">Bobo Ashanti</button>
                    <button onClick={() => setRevolution('chimurenga')} className="solidarity-tabs">Chimuranga war</button>
                    <button onClick={() => setRevolution('maroons')} className="solidarity-tabs">Jamaica Maroons</button>
                </div>
                <div className="solidarity-content-info">
                    {
                        switchTabs()
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Solidarity
