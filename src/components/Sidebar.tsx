import React from 'react'
import { SidebarProps } from '../props'
import SidebarContentWrapper from './SidebarContentWrapper'
import SidebarLayer from './SidebarLayer'
import SidebarLocations from './SidebarLocations'
import SidebarMeasurement from './SidebarMeasurement'
import SidebarTab from './SidebarTab'

const Sidebar: React.FC<SidebarProps> = ({ selectedMenu, coords }: SidebarProps) => {
  return (
    <>
      <SidebarTab selectedMenu={selectedMenu} />
      <SidebarContentWrapper>
        {selectedMenu === 'locations' && <SidebarLocations coords={coords} />}
        {selectedMenu === 'measurement' && <SidebarMeasurement />}
        {selectedMenu === 'layer' && <SidebarLayer />}
      </SidebarContentWrapper>
    </>
  )
}

export default Sidebar
