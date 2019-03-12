import React from 'react';
import LandingShot from './assets/Portland_Belong.jpg';
import Form from './Form';
import styled from 'styled-components';


const LandingShotStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ImageStyles = styled.img`
  background: no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100%;
`

const FormStyles = styled.div`
  position: absolute;
  display: block;
  top: 70%;
  right: 30%;
  width: 50%;
  height: 5%;
`

const FormWrapperStyles = styled.div`
width: 100%;
height: 20%;
position: absolute;
top: 62%;
background-color: hsla(0, 100%, 90%, 0.3);

`

function Landing(){
  return (
    <LandingShotStyles>
      <ImageStyles src={LandingShot} alt='City Shot'/>
       <FormWrapperStyles/>
        <FormStyles>
          <Form/>
        </FormStyles>
    </LandingShotStyles>
  );
}

export default Landing;
