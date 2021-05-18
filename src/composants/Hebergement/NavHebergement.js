import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHebergement = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover"
                    activeClassName="nav-active">
                    <li>Acceuill</li>
                </NavLink>

                <li className="nav-portfolio">Visitez
                <ul className="nav-projects">
                        <NavLink to="/modele-1" activeClassName="nav-active"
                            className="hover">
                            <li>Chambre  régulière</li>
                        </NavLink>
                        <NavLink to="/modele-2" activeClassName="nav-active"
                            className="hover">
                            <li>Chambre  familiale </li>
                        </NavLink>
                        <NavLink to="/modele-3" activeClassName="nav-active"
                            className="hover">
                            <li>Suite</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/reservation" activeClassName="nav-active"
                    className="hover">
                    <li>Reservez</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default NavHebergement;