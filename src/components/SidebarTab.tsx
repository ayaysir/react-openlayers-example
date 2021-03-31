import styled from "styled-components"

import icon1 from "./../assets/img/tab_icon_1.svg"
import icon2 from "./../assets/img/tab_icon_2.svg"
import icon3 from "./../assets/img/tab_icon_3.svg"

import selectedIcon1 from "./../assets/img/tab_icon_1_selected.svg"
import selectedIcon2 from "./../assets/img/tab_icon_2_selected.svg"
import selectedIcon3 from "./../assets/img/tab_icon_3_selected.svg"
import { useCallback, useState } from "react"
import { Link } from "react-router-dom"


// sidebar icon props 지정
interface SidebarIconProps {
    menu?: any,
	isSelected?: boolean,
    onClick?: any,
    changeMenu?: any,
}

interface Menu {
    name: string,
    icon: string,
    selectedIcon: string,
}

const MENU: Array<Menu> = [
    {
        name: "locations",
        icon: icon1,
        selectedIcon: selectedIcon1,
    }, 
    {
        name: "measurement",
        icon: icon2,
        selectedIcon: selectedIcon2,
    }, 
    {
        name: "layer",
        icon: icon3,
        selectedIcon: selectedIcon3,
    }, 
]

const StyledSidebarTab = styled.div`
    position: absolute;
    z-index: 2;
    width: 60px;
    height: 954px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;
    /* Elevation / Depth8 */

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

const SidebarTab = ({ selectedMenu }: any) => {

    return (
        <StyledSidebarTab>
            {MENU.map((menu: Menu) => (
                <SidebarIcon key={menu.name} menu={menu} isSelected={selectedMenu === menu.name}/>
            ))}
        </StyledSidebarTab>
    )
}

export default SidebarTab