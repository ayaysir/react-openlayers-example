import React from 'react';
import './App.css';
import MapSection from './map/MapSection';
import styled from 'styled-components';
import SidebarContainer from './containers/SidebarContainer';

const StyledApp = styled.div`
  /* Overview - 측정 1 */


  position: relative;
  width: 1680px;
  height: 954px;

  background: #FFFFFF;
`

function App() {
  return (
    <StyledApp className="App">
      <SidebarContainer />
      <MapSection />
    </StyledApp>
  );
}

export default App;
