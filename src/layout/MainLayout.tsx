import React from "react"
import styled from "styled-components"


const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: row;
`


const MainLayout: React.FC = ({ children }) => (
    <StyledMainLayout className="App">
        {children}
    </StyledMainLayout>
)

export default MainLayout