import styled from "styled-components"

const StyledSidebarContent = styled.div`
    z-index: 1;
    min-width: 306px;
    height: 954px;

    background: #FBFBFB;
`

const SidebarContent: React.FC = ({ children }) => {
    return (
        <StyledSidebarContent>
            {children}
        </StyledSidebarContent>
    )
}

export default SidebarContent