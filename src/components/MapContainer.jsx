import React from 'react';
import { Map, InfoWindow, Marker, Circle, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

const style = {
  width: '50%',
  height: '70%',
  position: 'relative',
  outline: '2px solid tomato',
  outlineOffset: '5px'
};

export class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    onMarkerClick(props, marker, e){
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }

  render(){
    console.log(this.props, 'map-props');
    return(
      <Map google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.userData.userCoords.lat,
          lng: this.props.userData.userCoords.lng
        }}
        zoom={12}>


        {Object.keys(this.props.userData.hoodData).map((hoodId) => {

          let marker = this.props.userData.hoodData[hoodId]
          return <Marker title={marker.hoodName}
            position={{lat: marker.hoodLat, lng: marker.hoodLng}}
            address={marker.hoodName}
            commute={marker.hoodCommuteTime}
            distance={marker.hoodDistance}
            onClick={this.onMarkerClick}
            key={hoodId} />
        }
      )}



      <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}
       >
         <div>
           <h3>{this.state.selectedPlace.title}</h3>
           <p><strong>Name:</strong> {this.state.selectedPlace.address}</p>
           <p><strong>Commute:</strong> {this.state.selectedPlace.commute}</p>
           <p><strong>Distance:</strong> {this.state.selectedPlace.distance}</p>
         </div>
       </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_API_KEY)
})(MapContainer);
