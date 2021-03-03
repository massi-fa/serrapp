import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import PlantView from './components/PlantView';

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

const App = () => (
  <Container>
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <PlantView />
    </ThemeProvider>
  </Container>
);

export default App;
