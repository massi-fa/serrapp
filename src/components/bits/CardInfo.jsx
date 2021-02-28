import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import pot from '../../res/pot.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const CardSquare = styled.div`
  margin: auto auto auto 0px;
  display: flex;
  flex-direction: column;
`;
const CardRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const Stated = styled.h1`
  font-size: 1.5em;
  margin: auto;
  color: white;
`;
const Symbol = styled.h1`
  font-size: 1.3em;
  margin: auto;
  color: white;
`;
const Text = styled.h1`
  font-size: 0.7em;
  margin: auto;
  color: white;
`;
const Icon = styled.img`
  height: 4rem;
`;

const CardInfo = ({ value, symbols, type }) => (
  <Container>
    <CardSquare>
      <CardRow>
        <Stated>
          {value}
        </Stated>
        <Symbol>
          {symbols}
        </Symbol>
      </CardRow>
      <Text>{type}</Text>
    </CardSquare>
    <Icon src={pot} />
  </Container>
);

CardInfo.propTypes = {
  value: PropTypes.node.isRequired,
  symbols: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
};

export default CardInfo;
