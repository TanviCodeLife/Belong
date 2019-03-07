import React from 'react';
import LandingShot from './assets/city-landing.jpg';
import styled from 'styled-components';


const LandingShotStyles = styled.div`
  width: 100%;
`

const ImageStyles = styled.img`
  background: no-repeat center center fixed;
  background-size: cover;
  width: 100%
`

function Landing(){
  return (
    <LandingShotStyles>
      <ImageStyles src={LandingShot} alt='City Shot'/>
    </LandingShotStyles>
  );
}

export default Landing;
