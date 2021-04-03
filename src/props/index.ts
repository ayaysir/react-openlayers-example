import React from 'react'

import icon1 from './../assets/img/tab_icon_1.svg'
import icon2 from './../assets/img/tab_icon_2.svg'
import icon3 from './../assets/img/tab_icon_3.svg'

import selectedIcon1 from './../assets/img/tab_icon_1_selected.svg'
import selectedIcon2 from './../assets/img/tab_icon_2_selected.svg'
import selectedIcon3 from './../assets/img/tab_icon_3_selected.svg'

import VectorLayer from 'ol/layer/Vector'
import { Feature } from 'ol'

export type Coord = Array<number>
export type CoordLatLon = Array<number>
export type CoordLonLat = Array<number>

// sidebar icon props 지정
export interface SidebarIconProps {
  menu?: any,
  isSelected?: boolean,
  changeMenu?: any,
}

export interface SidebarProps {
  selectedMenu: string,
  coords: Array<Coord>,
}

// Location FunctionalComponent props
export interface LocationFCProps {
  title: string,
  coord: Array<number>,
}

export interface SidebarTabProps {
  selectedMenu: string,
  allMenu: any,
}

export type SidebarContentProps = {
  children: | React.ReactNode
}

export interface LocationStateProps {
  coords: Array<Coord>, // 좌표 목록
  error: null // 응답에러 정보
}

export interface DrawPointProps {
  coord?: Coord,
  coordLatLon?: CoordLatLon,
  featuresLayer: VectorLayer
}

export interface MapSectionProps {
  features?: Array<Feature>,
  error?: any,
  locationsLatLon?: Array<CoordLatLon>
}

export interface Menu {
  name: string,
  icon: string,
  selectedIcon: string,
}

export const APP_MENU: Array<Menu> = [
  {
    name: 'locations',
    icon: icon1,
    selectedIcon: selectedIcon1
  },
  {
    name: 'measurement',
    icon: icon2,
    selectedIcon: selectedIcon2
  },
  {
    name: 'layer',
    icon: icon3,
    selectedIcon: selectedIcon3
  }
]
