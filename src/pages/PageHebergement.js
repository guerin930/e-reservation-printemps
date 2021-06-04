import React from 'react';
import ButtonBottoms from '../composants/Hebergement/ButtonBottoms';
import DynamicText from '../composants/Hebergement/DynamicText';
import NavHebergement from '../composants/Hebergement/NavHebergement';
import '../composants/Style/index.scss';
import { motion } from 'framer-motion';

function PageHebergement() {

    const variantes = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5},
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit : {
            opacity: 0,
            transition: { duration: 0.1},
            x: -100
        }
    }

    return (
        <>
            <motion.div 
            className="home"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variantes}
            >
                <NavHebergement />
                <div className="home-main">
                    <div className="main-content">
                        <h1> Hotel le printemps </h1>
                        <h2> <DynamicText /> </h2>
                    </div>
                    <ButtonBottoms  
                        right={"/modele-1"}
                    />
                </div>
            </motion.div>
        </>
    )
}

export default PageHebergement
