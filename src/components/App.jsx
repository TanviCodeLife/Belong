import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import Error404 from './Error404';
import MapContainer from './MapContainer';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  }
`;

const BodyStyles = styled.div`
 height: 100%;
`

export class App extends React.Component{
  constructor(props){
    super(props);

  }

render(){
console.log(this.props, 'props');
  if(this.props.userCoords.showMap){
    renderedContent = <MapContainer hoodData={this.props.hoodData}>
  }
  return (
    <BodyStyles>
      <GlobalStyles />
      <Header />
      <Homepage />
      {renderedContent}
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
