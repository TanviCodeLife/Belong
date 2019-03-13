import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import styled from 'styled-components';
import PinIcon from './assets/pin_icon.png';

const HoodStyle = styled.div`
  flex: auto;
  max-width: 200px;
  margin: 2rem;
  outline: 2px solid tomato;
  outline-offset: 7px;
  padding-left: 5%;
  background-color: hsla(0, 100%, 90%, 0.3);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

:hover{
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;

const ImageStyle = styled.img`
  height: 1.75rem;
  margin-left: -1.2rem;
`

function Hood({hoodName, hoodCommuteTime, hoodDistance}){
  return(
    <HoodStyle>
    <h3><ImageStyle src={PinIcon} alt='Logo'/>{hoodName}</h3>
    <p><strong>Drive Time: </strong>{hoodCommuteTime}</p>
    <p><strong>Distance: </strong> {hoodDistance}</p>
    </HoodStyle>
  );
}

Hood.propTypes = {
  hoodName: PropTypes.string.isRequired,
  hoodCommuteTime: PropTypes.string.isRequired,
  hoodDistance: PropTypes.string.isRequired,
};

export default Hood;
