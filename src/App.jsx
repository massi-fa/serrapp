import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import PlantView from './components/PlantView';
// import PlantView from './components/PlantView';
import SideMenu from './components/SideMenu';

const Container = styled.div`
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s;
  }
  body {
    overflow: hidden;
    height: 100%;
  } 
`;

const App = () => {
  const [openClose, setOpenClose] = useState('closed');
  const OnOpenClose = () => {
    if (openClose === 'opened') {
      setOpenClose('closed');
    } else {
      setOpenClose('opened');
    }
  };
  return (
    <Container>
      <ThemeProvider theme={{ mode: 'light' }}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/:name/:type/:id">
              <SideMenu funOpen={OnOpenClose} state={openClose} />
              <PlantView funOpen={OnOpenClose} />
            </Route>
            <Route path="/">
              <SideMenu funOpen={OnOpenClose} state={openClose} />
              <PlantView funOpen={OnOpenClose} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Container>
  );
};

export default App;
