import icon1 from "./../assets/img/tab_icon_1.svg"
import icon2 from "./../assets/img/tab_icon_2.svg"
import icon3 from "./../assets/img/tab_icon_3.svg"

import selectedIcon1 from "./../assets/img/tab_icon_1_selected.svg"
import selectedIcon2 from "./../assets/img/tab_icon_2_selected.svg"
import selectedIcon3 from "./../assets/img/tab_icon_3_selected.svg"

// sidebar icon props 지정
export interface SidebarIconProps {
    menu?: any,
	isSelected?: boolean,
    onClick?: any,
    changeMenu?: any,
}

export interface Menu {
    name: string,
    icon: string,
    selectedIcon: string,
}

export const APP_MENU: Array<Menu> = [
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