import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBarRoute, SideBtnWrap } from './SideFoodElements';


const SideFood = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen= {isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/PageRestauration">Menus complets</SideBarLink>
                <SideBarLink to="/PageRestauration">Petit Dejeuné</SideBarLink>
                <SideBarLink to="/PageRestauration">Boissons</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/PageContact">Commander maintenant</SideBarRoute>
            </SideBtnWrap>
        </SideBarContainer>
    );
};

export default SideFood;