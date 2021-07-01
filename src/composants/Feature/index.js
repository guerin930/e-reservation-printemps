import React from 'react';
import { FeatureContainer, FeatureButton} from './FeatureElements'


const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Le Plat du jour </h1>
            <p>Saka saka ou pondu ( feuilles de manioc ) 🤗🤗
                C'est un Plat qu'on retrouve principalement en afrique de l'ouest et en afrique centrale.
                Il est fait à base de feuilles de manioc pilées et s'accompagne avec du riz ou du manioc.
                facile à faire et très délicieux.😌</p>
                <FeatureButton>Commandez maintenant</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;