import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import plant from '../../res/plant.svg';

const Container = styled.div`
  background-color:rgb(49, 160, 95);
  border: 4px solid;
  border-color:  white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 6rem;
  height: 7rem;
  margin: 40px auto 0px auto;
  padding: 5px;
  box-shadow: rgb(51 51 51) 2px 2px 9px 2px;
`;
const Circle = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
`;
const Icon = styled.img`
  height: 3rem;
  margin: auto;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextName = styled.h1`
  margin: auto;
  font-size: 1rem;
`;
const TextType = styled.h1`
  margin: auto;
  font-size: 0.8rem;
`;
const CardPlant = ({ name, type }) => (
  <Container>
    <Circle>
      <Icon src={plant} />
    </Circle>
    <TextContainer>
      <TextName>{name}</TextName>
      <TextType>{type}</TextType>
    </TextContainer>
  </Container>
);

CardPlant.propTypes = {
  name: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
};

export default CardPlant;
