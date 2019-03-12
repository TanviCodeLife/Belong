import React from 'react';
import Landing from './Landing';
import styled from 'styled-components';

const HomePageStyles = styled.div`

`

const LandingStyles = styled.div`
  height: 100%;
  margin-bottom: 20%;
`

function Homepage(){
    return (
      <HomePageStyles>
        <LandingStyles>
          <Landing />
        </LandingStyles>
      </HomePageStyles>
    );
}

export default Homepage;
