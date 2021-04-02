import { SidebarProps } from "../props"
import SidebarContent from "./SidebarContent"
import SidebarLayer from "./SidebarLayer"
import SidebarLocations from "./SidebarLocations"
import SidebarMeasurement from "./SidebarMeasurement"
import SidebarTab from "./SidebarTab"


const Sidebar: React.FC<SidebarProps> = ({ selectedMenu, coords }) => {
    return(
        <>
            <SidebarTab selectedMenu={selectedMenu} />
            <SidebarContent>
                {selectedMenu === "locations" && <SidebarLocations coords={coords} />}
                {selectedMenu === "measurement" && <SidebarMeasurement />}
                {selectedMenu === "layer" && <SidebarLayer />}
            </SidebarContent>
        </>
    )
}

export default Sidebar