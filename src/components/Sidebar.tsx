import SidebarContent from "./SidebarContent"
import SidebarTab from "./SidebarTab"

const Sidebar = ({ sidebarContent, selectedMenu }: any) => {
    return(
        <>
            <SidebarTab selectedMenu={selectedMenu} />
            <SidebarContent>
                {sidebarContent}
            </SidebarContent>
        </>
    )
}

export default Sidebar