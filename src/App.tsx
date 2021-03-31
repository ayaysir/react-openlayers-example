import React from 'react';
import './App.css';
import MapSection from './map/MapSection';
import Sidebar from './components/sidebar/Sidebar';
import styled from 'styled-components';
import ExampleListContainer from './containers/ExampleContainer';
import SidebarContainer from './containers/ExampleContainer';

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
      <ExampleListContainer />
    </StyledApp>
  );
}

export default App;
