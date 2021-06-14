import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from '../AppContext';
import Img from '../../images/login.svg';
import Logout from '../authentification/Logout';
import { useSelector } from 'react-redux';

const NavBarClient = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer)
    return (
        <div className="nav" >
            <div className="nav-container">
            <div className="blogo">
                    <NavLink className="hpLogo" exact to="/">
                        PrintempsHotel
                </NavLink>
                </div>
                {(uid) ? (
                    <ul>
                        <li></li>
                        <li className="welcome">
                            <NavLink exact to="/PageConnexion">
                                <h5>Bienvenue {userData.pseudo}</h5>
                            </NavLink>
                        </li>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink exact to="/PageConnexion">
                                <img src={Img} alt="login" />
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NavBarClient;