import React from 'react';
import styled from 'styled-components/macro';

import back from '../res/back.svg';
import settings from '../res/settings.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(49, 160, 95);
  margin-top: 1rem;
`;
const ButtonL = styled.button`
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ButtonR = styled.button`
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px transparent;
  background-color: #6bbe76;
  border-radius: 20px 0px 0px 20px;
  width: 4rem;
  height: 2.8rem;
  margin: auto 0px auto 0px;
`;
const ImgIcon = styled.img`
  height: 2rem;
`;
const Text = styled.h1`
  font-size: 1.4em;
  color: white;
`;

const Header = () => (
  <Container>
    <ButtonL>
      <ImgIcon src={back} />
      <Text>My plants</Text>
    </ButtonL>
    <ButtonR>
      <ImgIcon src={settings} />
    </ButtonR>
  </Container>
);

export default Header;
