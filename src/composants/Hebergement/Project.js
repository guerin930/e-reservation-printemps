import React, { useState } from 'react';
import { projectsData } from './data/DataProject';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Project = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.NumProject];

    //un peu de style 
    let left = Math.floor(Math.random() * 200 + 700) + "px";
    let top = Math.floor(Math.random() * 200 + 150) + "px";
    let size = "scale(" + (Math.random() + 0.7) + ")";

    const variantes = {
        intinial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0.35,
            transition: { duration: 0.1 },
            x: -800
        }
    }
    let plusMinus = Math.random() > 0.4 ? 1 : -1;
    let imgX = Math.random() * 350 * plusMinus;
    let imgY = Math.random() * 120 * plusMinus;

    const imgAnim = {
        initial: {
            opacity: 0,
            x: imgX,
            y: imgY,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0
        }

    }

    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6
    }

    return (
        <motion.div
            className="project-main"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={variantes}
            transition={transition}
        >
            <div className="project-content">
                <h1>{project.title}</h1>
                <p>{project.texte}</p>
                <ul>
                    {project.caracteristiques.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <motion.div 
            className="img-content"
            initial="initial"
            animate="visible"
            variants={imgAnim}
            transition = {{duration:1.2}}
            >
                <div className="img-container hover">
                    <span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </span>
                    <img src={project.img} alt={project.title} />
                </div>
                <div className="button-container">
                    <NavLink className="hover" to="/PageReservation" activeClassName="nav-active">
                        <span className="button"> Reservez </span>
                    </NavLink>
                </div>
            </motion.div>
            <span className="random-circle" style={{
                left, top,
                transform: size
            }}></span>
        </motion.div>
    );
};

export default Project;