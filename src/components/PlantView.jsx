import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Line } from 'react-chartjs-2';

import Header from './Header';
import CardInfo from './bits/CardInfo';
import CardName from './bits/CardName';
import CardStat from './bits/CardStat';
import ProgressBar from './bits/ProgressBar';

import data from '../utils/data';

import stat from '../res/stat.svg';
import tick from '../res/tick.svg';
import plant from '../res/plant.svg';
// import light from '../res/lightBulb.svg';
import rain from '../res/rain.svg';
import day from '../res/day.svg';
import night from '../res/cloudy-night.svg';

const wheatherIcon = [
  { id: 1, weatherStatus: 'night', icon: night },
  { id: 2, weatherStatus: 'day', icon: day },
  { id: 3, weatherStatus: 'rain', icon: rain },
];

const Container = styled.div`
  background-color:rgb(49, 160, 95);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const ContainerMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1%;
`;
const ContainerImg = styled.div`
  width: 55%;
  display: flex;
`;
const ContainerBorder = styled.button`
  background-color: transparent;
  outline: none;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  border: 3px solid;
  border-radius: 20px;
  border-color: white;
`;
const LampImg = styled.img`
  width: 70%;
  margin: auto;
`;
const PotImg = styled.img`
  width: 55%;
  margin: auto;
`;
const InfoPlant = styled.div`
  width: 45%;
  margin: auto;
`;
const ProgressBarContainer = styled.div`
  margin: 80px 25px 0px 25px;
  padding: 5px;
  border: 3px solid;
  border-radius: 20px;
  border-color: white;
`;
const StatusContainer = styled.div`
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
  z-index: 2;
  position: absolute;
  bottom: 0;
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
  border-radius: 20px 20px 0px 0px;
  padding: 25px;
`;
const MenuS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const MenuH = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0px 0px 30px 0px;
`;
const MenuHC = styled.div`
  width: 49%;
  display: flex;
  text-align: center;
`;
const Hint = styled.h1`
  font-size: 1rem;
  margin: auto;
`;
const Pipe = styled.h1`
  margin: auto;
  font-size: 2rem;
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
  border-radius: 20px 20px 0px 0px;
  padding: 25px;
  overflow: scroll;
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
  const [weather, setWeather] = useState('day');
  const onWeatherChange = () => {
    if (weather === 'day') {
      setWeather('night');
    }
    if (weather === 'night') {
      setWeather('rain');
    }
    if (weather === 'rain') {
      setWeather('day');
    }
  };
  const [statusC, setStatusC] = useState('left');
  const changeMenuL = () => {
    setStatusC('left');
  };
  const changeMenuR = () => {
    setStatusC('right');
  };
  return (
    <Container>
      <Header />
      <ContainerMiddle>
        <ContainerImg>
          <ContainerBorder onClick={onWeatherChange}>
            {wheatherIcon.filter((icona) => icona.weatherStatus === weather).map((icona) => (
              <LampImg src={icona.icon} key={icona.id} />
            ))}
            <PotImg src={plant} />
          </ContainerBorder>
        </ContainerImg>
        <InfoPlant>
          <CardName name="Calathea" time="26 weeks" />
          <CardInfo value={19} symbols="%" type="Humidity" />
          <CardInfo value={86} symbols="%" type="Fertilizer" />
          <CardInfo value={36} symbols="min" type="Watering in" />
        </InfoPlant>
      </ContainerMiddle>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
      <StatusContainer>
        <MenuL condition={statusC}>
          <MenuH>
            <MenuHC>
              <Hint>aiutoooo</Hint>
            </MenuHC>
            <Pipe>|</Pipe>
            <MenuHC>
              <Hint>annaffia la pianta coglione</Hint>
            </MenuHC>
          </MenuH>
          <MenuS>
            <CardStat stated="10" symbol="%" type="Water" icon={tick} />
            <CardStat stated="78" symbol="%" type="Light" icon={tick} />
            <CardStat stated="24" symbol="C^" type="Temp." icon={tick} />
          </MenuS>
        </MenuL>
        <MenuR condition={statusC}>
          <MenuH>
            <Line data={data} />
          </MenuH>
        </MenuR>
        <ContainerButton>
          <ButtonL onClick={changeMenuL} condition={statusC}>
            <IconL src={stat} condition={statusC} />
            <TextL condition={statusC}>Statistics</TextL>
          </ButtonL>
          <ButtonR onClick={changeMenuR} condition={statusC}>
            <IconR src={stat} condition={statusC} />
            <TextR condition={statusC}>Chart</TextR>
          </ButtonR>
        </ContainerButton>
      </StatusContainer>
    </Container>
  );
};

export default PlantView;
