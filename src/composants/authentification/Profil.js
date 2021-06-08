import React from 'react';
import Login from './Login';
import Img from '../../images/icon.svg';
import { NavLink } from 'react-router-dom';

const Profil = () => {
    return (
        <div className="profil-page">
            <div className="navigation">
                <ul>
                    <NavLink to="/" exact className="hover"
                        activeClassName="nav-active">
                        <li className="titre">Acceuil</li>
                    </NavLink>
                </ul>
            </div>
            <div className="log-container">
                <Login signIn={true} signUp={false} />
                <div className="img-container">
                    <img src={Img} alt="login" />
                </div>
            </div>
        </div>
    );
};

export default Profil;