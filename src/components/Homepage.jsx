import React from 'react';
import Landing from './Landing';
import MapContainer from './MapContainer';
import styled from 'styled-components';

const HomePageStyles = styled.div`

`

const LandingStyles = styled.div`
  height: 100%;
  margin-bottom: 20%;
`

class Homepage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
  }

  render(){
    return (
      <HomePageStyles>
        <LandingStyles>
          <Landing />
        </LandingStyles>
        <MapContainer id='mapcontainer'/>
      </HomePageStyles>
    );

  }
}

export default Homepage;
