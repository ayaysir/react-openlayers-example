import styled from "styled-components"
import SidebarTab from "./SidebarTab"



const StyledSidebarContents = styled.div`
    position: absolute;
    z-index: 1;
    width: 306px;
    height: 954px;
    left: 60px;
    top: 0px;

    background: #FBFBFB;
`



const Sidebar: React.FC = () => {
    return(
        <>
            <SidebarTab />
            <StyledSidebarContents />
        </>
    )
}

export default Sidebar