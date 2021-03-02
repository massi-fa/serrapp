import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Header from './Header';
import CardInfo from './bits/CardInfo';
import CardName from './bits/CardName';

import stat from '../res/stat.svg';

const Container = styled.div`
  background-color:rgb(49, 160, 95);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InfoPlant = styled.div`
  width: 45%;
  align-self: flex-end;
`;
const StatusContainer = styled.div`
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
`;
const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const ButtonL = styled.button`
  width: 50%;
  height: 4rem;
  border: none;
  outline: none;
  background-color: transparent;
  background-color: ${(props) => (props.condition === 'left' ? 'white' : 'rgb(49, 160, 95)')};
  border-radius: ${(props) => (props.condition === 'left' ? '0px' : '0px 20px 0px 0px')};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const MenuL = styled.div`
  background-color: ${(props) => (props.condition === 'left' ? 'white' : 'rgb(49, 160, 95)')};
  display: ${(props) => (props.condition === 'left' ? 'block' : 'none')};
  visibility: ${(props) => (props.condition === 'left' ? 'visible' : 'collapse')};
`;
const ButtonR = styled.button`
  width: 50%;
  height: 4rem;
  border: none;
  outline: none;
  background-color: transparent;
  background-color: ${(props) => (props.condition === 'right' ? 'white' : 'rgb(49, 160, 95)')};
  border-radius: ${(props) => (props.condition === 'right' ? '0px' : '20px 0px 0px 0px')};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const MenuR = styled.div`
  background-color: ${(props) => (props.condition === 'right' ? 'white' : 'rgb(49, 160, 95)')};
  display: ${(props) => (props.condition === 'right' ? 'block' : 'none')};
  visibility: ${(props) => (props.condition === 'right' ? 'visible' : 'collapse')};
`;
const TextL = styled.h1`
  font-size: 1.5rem;
  margin: auto;
  filter: ${(props) => (props.condition === 'left' ? 'none' : 'invert(1)')};
`;
const TextR = styled.h1`
  font-size: 1.5rem;
  margin: auto;
  filter: ${(props) => (props.condition === 'right' ? 'none' : 'invert(1)')};
`;
const IconL = styled.img`
  height: 1.5rem;
  margin: auto;
  filter: ${(props) => (props.condition === 'left' ? 'invert(0)' : 'invert(1)')};
`;
const IconR = styled.img`
  height: 1.5rem;
  margin: auto;
  filter: ${(props) => (props.condition === 'right' ? 'invert(0)' : 'invert(1)')};
`;

const PlantView = () => {
  const [statusC, setStatusC] = useState('left');
  const changeMenuL = () => {
    if (statusC === 'right') {
      console.log('ciao');
    }
    setStatusC('left');
  };
  const changeMenuR = () => {
    setStatusC('right');
  };
  return (
    <Container>
      <Header />
      <InfoPlant>
        <CardName name="Calathea" time="26 weeks" />
        <CardInfo value={19} symbols="%" type="Humidity" />
        <CardInfo value={86} symbols="%" type="Fertilizer" />
        <CardInfo value={36} symbols="min" type="Watering in" />
      </InfoPlant>
      <StatusContainer>
        <MenuL condition={statusC}>
          <h1>sono nel menu L</h1>
          <h1>sono nel menu L</h1>
        </MenuL>
        <MenuR condition={statusC}>
          <h1>sono nel menu R</h1>
          <h1>sono nel menu R</h1>
        </MenuR>
        <ContainerButton>
          <ButtonL onClick={changeMenuL} condition={statusC}>
            <IconL src={stat} condition={statusC} />
            <TextL condition={statusC}>Statistics</TextL>
          </ButtonL>
          <ButtonR onClick={changeMenuR} condition={statusC}>
            <IconR src={stat} condition={statusC} />
            <TextR condition={statusC}>Information</TextR>
          </ButtonR>
        </ContainerButton>
      </StatusContainer>
    </Container>
  );
};

export default PlantView;
