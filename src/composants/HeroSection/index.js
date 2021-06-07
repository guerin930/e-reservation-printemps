import React, { useState } from 'react'
import Img from '../../images/screen.jpg'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    ImgBg

} from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Img} type='image/jpg' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Bienvenue a L'Hotel le printemps</HeroH1>
                <HeroP>
                    Cher Visiteur abonnez vous et recevez une promotion au sein
                    de notre structure pour votre prochain séjour.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="PageAbonnement"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary = 'true'
                        dark = 'true'
                        >
                        s'abonner {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
