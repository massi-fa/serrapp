import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardPlant from './bits/CardPlant';

import back from '../res/back.svg';

const Container = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: ${(props) => (props.condition === 'opened' ? '100%' : '0%')};
  z-index: 3;
  overflow-x: hidden;
  display: flex
`;
const ContainerSide = styled.div`
  background-color: white;
  width: 70%;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(51 51 51) 2px 2px 7px 2px;
  background-color: white;
`;
const Exit = styled.button`
  width: 30%;
  background-color: transparent;
  outline: none;
  border: none;
`;
const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const ImgIcon = styled.img`
  height: 2rem;
  filter: invert(1);
`;
const Text = styled.h1`
  font-size: 1.4em;
`;
const PlantList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const SideMenu = ({ funOpen, state }) => (
  <Container condition={state}>
    <ContainerSide>
      <Button onClick={funOpen}>
        <ImgIcon src={back} />
        <Text>PlantView</Text>
      </Button>
      <PlantList>
        <CardPlant name="Weed" type="Outdoor" />
        <CardPlant name="Weed" type="Outdoor" />
        <CardPlant name="Weed" type="Outdoor" />
        <CardPlant name="Weed" type="Outdoor" />
        <CardPlant name="Weed" type="Outdoor" />
        <CardPlant name="Weed" type="Outdoor" />
        <CardPlant name="Weed" type="Outdoor" />
        <CardPlant name="Weed" type="Outdoor" />
        <CardPlant name="Weed" type="Outdoor" />
      </PlantList>
    </ContainerSide>
    <Exit onClick={funOpen} />
  </Container>
);

SideMenu.propTypes = {
  funOpen: PropTypes.func.isRequired,
  state: PropTypes.node.isRequired,
};

export default SideMenu;
