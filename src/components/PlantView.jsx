import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Header from './Header';
import CardInfo from './bits/CardInfo';
import CardName from './bits/CardName';
import CardStat from './bits/CardStat';
import ProgressBar from './bits/ProgressBar';

import data from '../utils/data';
// import plants from '../utils/plants';

import stat from '../res/stat.svg';
import tick from '../res/tick.svg';
import plant from '../res/plant.svg';
// import light from '../res/lightBulb.svg';
import rain from '../res/rain.svg';
import day from '../res/day.svg';
import night from '../res/cloudy-night.svg';
import plants from '../utils/plants';

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
  box-shadow: rgb(51 51 51) 2px 2px 6px 0px;
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
  margin: 10px 25px 0px 25px;
  padding: 5px;
  border: 3px solid;
  border-radius: 20px;
  border-color: white;
  box-shadow: rgb(51 51 51) 2px 2px 6px 0px;
`;
const StatusContainer = styled.div`
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  box-shadow: rgb(51 51 51) 2px 2px 7px 2px;
  background-color: white;
  z-index: 2;
  position: absolute;
  bottom: 0;
`;
const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonL = styled.button`
  width: 47%;
  height: 4rem;
  border: none;
  outline: none;
  background-color: transparent;
  background-color: ${(props) => (props.condition === 'left' ? 'white' : 'rgb(49, 160, 95)')};
  border-radius: ${(props) => (props.condition === 'left' ? '0px' : '0px 20px 0px 0px')};
  box-shadow: ${(props) => (props.condition === 'left' ? '' : 'rgb(51 51 51) 1px -1px 20px -1px')};
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
const ButtonR = styled.button`
  width: 47%;
  height: 4rem;
  border: none;
  outline: none;
  background-color: transparent;
  background-color: ${(props) => (props.condition === 'right' ? 'white' : 'rgb(49, 160, 95)')};
  border-radius: ${(props) => (props.condition === 'right' ? '0px' : '20px 0px 0px 0px')};
  box-shadow: ${(props) => (props.condition === 'right' ? '' : 'rgb(51 51 51) 1px 1px 20px -1px')};
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

const PlantView = ({ funOpen }) => {
  const { id } = useParams();
  let obj;
  if (id !== undefined) {
    obj = plants.find((element) => element.id === Number(id));
  } else {
    obj = plants.find((element) => element.id === 1);
  }
  const [statusC, setStatusC] = useState('right');
  const changeMenuL = () => {
    setStatusC('left');
  };
  const changeMenuR = () => {
    setStatusC('right');
  };
  return (
    <Container>
      <Header funOpen={funOpen} />
      <ContainerMiddle>
        <ContainerImg>
          <ContainerBorder>
            {wheatherIcon.filter((icona) => icona.weatherStatus === obj.day).map((icona) => (
              <LampImg src={icona.icon} key={icona.id} />
            ))}
            <PotImg src={plant} />
          </ContainerBorder>
        </ContainerImg>
        <InfoPlant>
          <CardName name={obj.name} time={obj.time} />
          <CardInfo value={obj.humidity} symbols="%" type="Humidity" />
          <CardInfo value={obj.fertilizer} symbols="%" type="Fertilizer" />
          <CardInfo value={obj.watering} symbols="min" type="Watering in" />
        </InfoPlant>
      </ContainerMiddle>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
      <StatusContainer>
        <MenuL condition={statusC}>
          <MenuS>
            <CardStat stated={obj.watertank} symbol="%" type="Water" icon={tick} />
            <CardStat stated={obj.light} symbol="%" type="Light" icon={tick} />
            <CardStat stated={obj.temperature} symbol="C^" type="Temp." icon={tick} />
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

PlantView.propTypes = {
  funOpen: PropTypes.func.isRequired,
};

export default PlantView;
