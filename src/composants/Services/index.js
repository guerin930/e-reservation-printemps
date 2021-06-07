import React from 'react'
import icon from '../../images/icon.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3s.svg'
import icon4 from '../../images/icon4.svg'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElement'


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nos Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon} />
                    <ServicesH2>Reception</ServicesH2>
                    <ServicesP>Enregistrement/départ privé, Bagagerie, enregistrement et règlement rapides, Réception ouverte 24h/24</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon4} />
                    <ServicesH2>Parking</ServicesH2>
                    <ServicesP>Gratuit ! Un parking gratuit et privé est disponible sur place., 
                        Parking accessible aux personnes à mobilité réduite, Parking intérieur, Places de stationnement dans la rue, Parking sécurisé</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2>Internet</ServicesH2>
                    <ServicesP>	Gratuit ! Une connexion Wi-Fi est disponible dans tout l'établissement gratuitement reservé aux clients du printemps.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2>Services d'affaires</ServicesH2>
                    <ServicesP>salles de réunions/banquets (en supplément), salle de fete/mariage/anniversaire (evenements) </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
