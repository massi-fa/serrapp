import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Container = styled.button`
  background-color:#bbc9c2;
  outline: none;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  margin: 20px auto 20px auto;
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
const CardPlant = ({
  res,
  name,
  type,
  time,
  humidity,
  fertilizer,
  watering,
  watertank,
  light,
  temperature,
}) => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push('/plant', {
      nome: { name },
      type: { type },
      time: { time },
      humidity: { humidity },
      fertilizer: { fertilizer },
      watering: { watering },
      watertank: { watertank },
      light: { light },
      temperature: { temperature },
    });
  };
  return (
    <Container onClick={handleSubmit}>
      <Circle>
        <Icon src={res} />
      </Circle>
      <TextContainer>
        <TextName>{name}</TextName>
        <TextType>{type}</TextType>
      </TextContainer>
    </Container>
  );
};

CardPlant.propTypes = {
  res: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  time: PropTypes.node.isRequired,
  humidity: PropTypes.node.isRequired,
  fertilizer: PropTypes.node.isRequired,
  watering: PropTypes.node.isRequired,
  watertank: PropTypes.node.isRequired,
  light: PropTypes.node.isRequired,
  temperature: PropTypes.node.isRequired,
};

export default CardPlant;
