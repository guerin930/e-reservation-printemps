import React, {useState} from 'react';
import NavFood from '../NavFood';
import {HeroContainer, HeroContent,HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';
import SideFood from '../SideBar/SideFood';

const Hero = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    }
    return (
        <>
            <HeroContainer>
                <NavFood toggle={toggle}/>
                <SideFood isOpen={isOpen} toggle={toggle}/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Des Plats de qualité</HeroH1>
                        <HeroP>Pret en quelques minutes </HeroP>
                        <HeroBtn>Passez la commande </HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    );
};

export default Hero;