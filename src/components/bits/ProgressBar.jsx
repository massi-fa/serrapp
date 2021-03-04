import React from 'react';
import styled from 'styled-components';

import seed from '../../res/seed.svg';
import bud from '../../res/bud.svg';
import flower from '../../res/flower.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;
const Circle = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border: 5px solid;
  border-radius: 50%;
  border-color: ${(props) => (props.condition === 'complete' ? '#00C9DA' : 'white')};
  margin: auto;
  display: flex;
  justify-content: center;
`;
const Icon = styled.img`
  height: 2rem;
  margin: auto;
`;

const ProgressBar = () => (
  <Container>
    <Circle condition="complete">
      <Icon src={seed} />
    </Circle>
    <Circle condition="complete">
      <Icon src={bud} />
    </Circle>
    <Circle>
      <Icon src={flower} />
    </Circle>
  </Container>
);

export default ProgressBar;
