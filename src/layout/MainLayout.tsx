import React from "react"
import styled from "styled-components"
import MapSection from '../components/MapSection';

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const MainLayout: React.FC = ({ children }) => (
    <StyledMainLayout className="App">
        {children}
        <MapSection />
    </StyledMainLayout>
)

export default MainLayout