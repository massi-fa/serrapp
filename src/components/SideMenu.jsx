import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardPlant from './bits/CardPlant';

import back from '../res/back.svg';

const Container = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: ${(props) => (props.condition === 'opened' ? '60%' : '0%')};
  z-index: 3;
  overflow-x: hidden;
  background-color: #3B4A3F;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
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
`;
const Text = styled.h1`
  font-size: 1.4em;
  color: white;
`;
const PlantList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const SideMenu = ({ funOpen, state }) => (
  <Container condition={state}>
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
  </Container>
);

SideMenu.propTypes = {
  funOpen: PropTypes.func.isRequired,
  state: PropTypes.node.isRequired,
};

export default SideMenu;
