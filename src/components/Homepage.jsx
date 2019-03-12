import React from 'react';
import Landing from './Landing';
import MapContainer from './MapContainer';
import styled from 'styled-components';

const HomePageStyles = styled.div`

`

function Homepage(){
  return (
    <HomePageStyles>
      <Landing />
      <MapContainer id='map-container'/>
    </HomePageStyles>
  );
}

export default Homepage;
