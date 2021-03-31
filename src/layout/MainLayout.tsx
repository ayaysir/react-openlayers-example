import React from "react"
import styled from "styled-components"
import SidebarContainer from "../containers/SidebarContainer";
import MapSection from './../map/MapSection';

const StyledMainLayout = styled.div`
  /* Overview - 측정 1 */


  position: relative;
  width: 1680px;
  height: 954px;

  background: #FFFFFF;
`

const MainLayout: React.FC = ({ children }) => (
    <StyledMainLayout className="App">
        {children}
        <MapSection />
    </StyledMainLayout>
)

export default MainLayout