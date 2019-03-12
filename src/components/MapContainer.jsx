import React from 'react';
import { Map, Infowindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

const style = {
  width: '500px',
  height: '500px',
  position: 'relative'
};

export class MapContainer extends React.Component {
  render(){
    return(
      <Map google={this.props.google}
        style={style}
        initialCenter={{
          lat: 45.5122,
          lng: -122.6587
        }}
        zoom={12}>


      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_API_KEY)
})(MapContainer);
