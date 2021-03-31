import styled from "styled-components"

const StyledSidebarContent = styled.div`
    position: absolute;
    z-index: 1;
    width: 306px;
    height: 954px;
    left: 60px;
    top: 0px;

    background: #FBFBFB;
`

const SidebarContent: React.FC = ({ children }: any) => {
    return (
        <StyledSidebarContent>
            {children}
        </StyledSidebarContent>
    )
}

export default SidebarContent