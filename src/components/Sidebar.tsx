import SidebarContent from "./SidebarContent"
import SidebarLayer from "./SidebarLayer"
import SidebarLocations from "./SidebarLocations"
import SidebarMeasurement from "./SidebarMeasurement"
import SidebarTab from "./SidebarTab"


const Sidebar = ({ selectedMenu }: any) => {
    return(
        <>
            <SidebarTab selectedMenu={selectedMenu} />
            <SidebarContent>
                {selectedMenu === "locations" && <SidebarLocations />}
                {selectedMenu === "measurement" && <SidebarMeasurement />}
                {selectedMenu === "layer" && <SidebarLayer />}
            </SidebarContent>
        </>
    )
}

export default Sidebar