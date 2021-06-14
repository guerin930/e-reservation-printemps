import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoute

} from './ElementSideBar'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="hebergement" onClick={toggle}>
                        Hebergement
                    </SideBarLink>
                    <SideBarLink to="restauration" onClick={toggle}>
                        Restauration
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to="contact" onClick={toggle}>
                        Contact
                    </SideBarLink>
                    <SideBarLink to="connexion" onClick={toggle}>
                        Se connecter
                    </SideBarLink>
                    </SideBarMenu>
                    <SideBtnWrap>
                        <SideBarRoute to="/PageConnexion">
                            S'identifier
                        </SideBarRoute>
                    </SideBtnWrap>
               
            </SideBarWrapper>
        </SidebarContainer>

    )
}

export default SideBar
