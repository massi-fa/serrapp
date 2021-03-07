import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color:#bbc9c2;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  margin: 40px auto 0px auto;
  padding: 10px;
  box-shadow: rgba(51,51,51,0.7) 2px 2px 9px 2px;
`;
const Circle = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 2px solid;
  border-color: rgb(49, 160, 95);
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
  margin: auto auto auto 0px;
`;
const TextName = styled.h1`
  margin: auto;
  font-size: 1rem;
`;
const TextType = styled.h1`
  margin: auto;
  font-size: 0.8rem;
`;
const CardPlant = ({ res, name, type }) => (
  <Container>
    <Circle>
      <Icon src={res} />
    </Circle>
    <TextContainer>
      <TextName>{name}</TextName>
      <TextType>{type}</TextType>
    </TextContainer>
  </Container>
);

CardPlant.propTypes = {
  res: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
};

export default CardPlant;
