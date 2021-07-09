import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHebergement = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover"
                    activeClassName="nav-active">
                    <li className="titre" >Acceuill</li>
                </NavLink>

                <li className="nav-portfolio">Visitez
                <ul className="nav-projects">
                        <NavLink to="/modele-1" activeClassName="nav-active"
                            className="hover">
                            <li className="titre">Chambre  régulière</li>
                        </NavLink>
                        <NavLink to="/modele-2" activeClassName="nav-active"
                            className="hover">
                            <li className="titre">Chambre  familiale </li>
                        </NavLink>
                        <NavLink to="/modele-3" activeClassName="nav-active"
                            className="hover">
                            <li className="titre">Suite</li>
                        </NavLink>
                        <NavLink to="/modele-4" activeClassName="nav-active"
                            className="hover">
                            <li className="titre">Salle des fetes</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/PageReservation" activeClassName="nav-active"
                    className="hover">
                    <li className="titre">Reservez</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default NavHebergement;