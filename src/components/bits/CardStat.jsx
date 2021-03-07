import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: auto;
  text-align: center;
  border: 2px solid;
  border-radius: 20px;
  padding: 15px;
  background-color: rgb(49, 160, 95);
  border-color: rgb(49, 160, 95, 0.5);
  width: 3.3rem;
`;
const ContainerS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Stated = styled.h1`
  font-size: 1.5rem;
  margin: 0px 0px 5px auto;
  color: white;
`;
const Symbol = styled.h1`
  font-size: 1rem;
  margin: 3px auto auto 0px;
  color: white;
`;
const Type = styled.h1`
  font-size: 1rem;
  margin: 0px auto auto auto;
  color: white;
`;
const Icon = styled.img`
  height: 0.8rem;
  filter: invert(1);
`;
const CardStat = ({
  stated,
  symbol,
  type,
  icon,
}) => (
  <Container>
    <ContainerS>
      <Stated>{stated}</Stated>
      <Symbol>{symbol}</Symbol>
    </ContainerS>
    <ContainerS>
      <Type>{type}</Type>
      <Icon src={icon} />
    </ContainerS>
  </Container>
);

CardStat.propTypes = {
  stated: PropTypes.node.isRequired,
  symbol: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

export default CardStat;
