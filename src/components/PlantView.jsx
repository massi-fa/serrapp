import React from 'react';
import styled from 'styled-components/macro';

import Header from './Header';
import CardInfo from './bits/CardInfo';
import CardName from './bits/CardName';

const Container = styled.div`
  background-color:rgb(49, 160, 95);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InfoPlant = styled.div`
  width: 50%;
  align-self: flex-end;
`;
const PlantView = () => (
  <Container>
    <Header />
    <InfoPlant>
      <CardName name="Calathea" time="26 weeks" />
      <CardInfo value={19} symbols="%" type="Humidity" />
      <CardInfo value={86} symbols="%" type="Fertilizer" />
      <CardInfo value={36} symbols="min" type="Watering in" />
    </InfoPlant>
    <h1>ciao</h1>
  </Container>
);

export default PlantView;
