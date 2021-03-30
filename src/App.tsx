import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapSection from './map/MapSection';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import ExampleListContainer from './containers/ExampleContainer';

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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Sidebar />
      <MapSection />
      <ExampleListContainer />
    </StyledApp>
  );
}

export default App;
