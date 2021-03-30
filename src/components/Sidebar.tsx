import styled from "styled-components"

const StyledSidebarCommon = styled.div`
    position: absolute;
    z-index: 1;
`

const StyledSidebarTabs = styled(StyledSidebarCommon)`
    width: 60px;
    height: 954px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;
    /* Elevation / Depth8 */

    box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`

const StyledSidebarContents = styled(StyledSidebarCommon)`
    width: 306px;
    height: 954px;
    left: 60px;
    top: 0px;

    background: #FBFBFB;
`

const Sidebar: React.FC = () => {
    return(
        <div>
            <StyledSidebarTabs />
            <StyledSidebarContents />
        </div>
    )
}

export default Sidebar