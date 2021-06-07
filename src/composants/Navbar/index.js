import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    IconMobile,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './ElementNavbar'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>PrintempsHotel</NavLogo>
                    <IconMobile onClick={toggle}>
                        <FaBars />
                    </IconMobile>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to='hebergement'
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true' 
                                offset={-80}
                            >Hebergement</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="Restauration"
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true' 
                            offset={-80}
                            >Restauration</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="services"
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true' 
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="contact"
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true' 
                            offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="connexion"
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true' 
                            offset={-80}
                            >Espace-Client</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink 
                            to="PageConnexion"
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true' 
                            offset={-80}
                            >Se Connecter</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
