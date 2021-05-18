import React, {useState} from 'react'
import Footer from '../composants/Footer'
import HeroSection from '../composants/HeroSection'
import Navbar from '../composants/Navbar'
import SectionInfos from '../composants/SectionInfos'
import { homeObj1, homeObj2, homeObj3, homeObj4 } from '../composants/SectionInfos/Data'
import Services from '../composants/Services'
import SideBar from '../composants/SideBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false) /**nous initialisons l'etat actuel de la variable isOpen par false/ */

    const toggle = () => {
        setIsOpen(!isOpen)
    } /*toggle ici nous permet de modifier l'etat de isOpen */



    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <SectionInfos {...homeObj1} />
            <SectionInfos {...homeObj2} />
            <Services />
            <SectionInfos {...homeObj4} />
            <SectionInfos {...homeObj3} />
            <Footer />
            
        </>
    )
}

export default Home
