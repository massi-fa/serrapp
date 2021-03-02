import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 3rem;
`;
const Name = styled.h1`
  font-size: 1.5rem;
  margin: 0px;
  color: white;
`;
const Time = styled.h1`
  font-size: 1rem;
  margin: 0px;
  color: white;
`;

const CardName = ({ name, time }) => (
  <Container>
    <Name>{name}</Name>
    <Time>{time}</Time>
  </Container>
);

CardName.propTypes = {
  name: PropTypes.node.isRequired,
  time: PropTypes.node.isRequired,
};

export default CardName;
