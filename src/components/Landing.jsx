import React from 'react';
import LandingShot from './assets/city-landing.jpg';
import Form from './Form';
import styled from 'styled-components';


const LandingShotStyles = styled.div`
  position: relative;
  width: 100%;
`

const ImageStyles = styled.img`
  background: no-repeat center center fixed;
  background-size: cover;
  width: 100%
`

const FormStyles = styled.div`
  position: absolute;
  display: block;
  top: 60%;
  right: 30%;
  width: 50%;
  height: 5%;
  padding-left: -30%;
`


function Landing(){
  return (

    <LandingShotStyles>
      <ImageStyles src={LandingShot} alt='City Shot'/>
      <FormStyles>
        <Form/>
      </FormStyles>
    </LandingShotStyles>
  );
}

export default Landing;
