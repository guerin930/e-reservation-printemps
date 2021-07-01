import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavFoodElements';

const index = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Printemps Hotels</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default index;