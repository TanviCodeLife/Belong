import React from 'react';
import Homepage from './Homepage';
import Header from './Header';
import Error404 from './Error404';
import MapContainer from './MapContainer';
import styled from 'styled-components';
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
    c
  }
  return (
    <div>
    <GlobalStyles />
    <BodyStyles>
      <Header />
      <Homepage />
    </BodyStyles>
    <MapContainer/>
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    showMap: state.showMap,
    hoodData: state.currentCoords
  }
}

export default connect(mapStateToProps)(App);
