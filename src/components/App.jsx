import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import Error404 from './Error404';
import MapContainer from './MapContainer';
import HoodList from './HoodList';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Domine');
    font-family: 'Domine', serif;
  }
`;

const BodyStyles = styled.div`
 height: 100%;
`

const ContainerStyles = styled.div`
 display: grid;
 grid-template-rows: 1fr 1fr;
 grid-row-gap: 20px;
`

const ResultTextStyles = styled.h1`
  text-align: center;
`

export class App extends React.Component{
  constructor(props){
    super(props);
    const { dispatch } = props;
  }

render(){
  let renderedMap;
  let renderedCard;
  let renderedText;
  console.log(this.props, 'props');
  if(this.props.userCoords.showMap){
    renderedText = <ResultTextStyles>Neigborhoods:</ResultTextStyles>
    renderedMap = <MapContainer userData={this.props}/>
    renderedCard = <HoodList cardData={this.props}/>
  }
  return (
      <BodyStyles>
        <GlobalStyles />
        <Header />
        <Homepage />
        {renderedText}
        <ContainerStyles>
        {renderedMap}
        {renderedCard}
      </ContainerStyles>
      </BodyStyles>

    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    userCoords: state.currentCoords,
    hoodData: state.masterHoodsList
  }
}

export default connect(mapStateToProps)(App);
