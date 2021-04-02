import styled from "styled-components"
import { SidebarIconProps, Menu, APP_MENU, SidebarTabProps } from "./../props"

import { Link } from "react-router-dom"

const StyledSidebarTab = styled.div`
    z-index: 2;
    min-width: 60px;
    height: 954px;

    background: #FFFFFF;
    box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`

const StyledSidebarIcon = styled.div<SidebarIconProps>`
    width: 44px;
    height: 44px;
    margin-left: 8px;
    margin-top: 8px;

    background: ${(props: SidebarIconProps) => props.isSelected && "#1F4782"};
    border-radius: 5px;

    text-align: center;
    cursor: pointer;
`

const StyledIconImg = styled.img`
    width: 17px;
    height: 15.94px;
    margin-top: calc(22px - 8px);
`

const SidebarIcon: React.FC<SidebarIconProps> = ({ menu, isSelected }: SidebarIconProps) => {

    return (
        <>
            <Link className="menu" to={`/${menu.name}`} >
                <StyledSidebarIcon isSelected={isSelected} >
                        <StyledIconImg src={isSelected ? menu.selectedIcon : menu.icon} />

                </StyledSidebarIcon>
            </Link>
        </>
    )
}

const SidebarTab: React.FC<SidebarTabProps> = ({ selectedMenu }) => {

    return (
        <StyledSidebarTab>
            {APP_MENU.map((menu: Menu) => (
                <SidebarIcon key={menu.name} menu={menu} isSelected={selectedMenu === menu.name}/>
            ))}
        </StyledSidebarTab>
    )
}

export default SidebarTab