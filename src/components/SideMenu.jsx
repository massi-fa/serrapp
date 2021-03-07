import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CardPlant from './bits/CardPlant';

import back from '../res/back.svg';
import plants from '../utils/plants';

const Container = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: ${(props) => (props.condition === 'opened' ? '70%' : '0%')};
  z-index: 3;
  overflow-x: hidden;
  display: flex;
  background-color: rgb(49, 160, 95);
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(51 51 51) 2px 2px 7px 2px;
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

const useClickOutside = (ref, callback, state) => {
  const handleClick = (e) => {
    if (state === 'opened') {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

const SideMenu = ({ funOpen, state }) => {
  const clickRef = React.useRef();
  useClickOutside(clickRef, funOpen, state);
  return (
    <Container condition={state} ref={clickRef}>
      <Button onClick={funOpen}>
        <ImgIcon src={back} />
        <Text>PlantView</Text>
      </Button>
      <PlantList>
        {
          plants.map((el) => (
            <CardPlant res={el.image} name={el.name} type={el.type} />
          ))
        }
      </PlantList>
    </Container>
  );
};

SideMenu.propTypes = {
  funOpen: PropTypes.func.isRequired,
  state: PropTypes.node.isRequired,
};

export default SideMenu;
