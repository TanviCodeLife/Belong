import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestCoords = ({ lat, lng }) => ({
  type: types.GET_COORDS,
  lat: lat,
  lng: lng
})

export function fetchCoords(address){
  return function(dispatch){
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+process.env.GOOGLE_MAPS_API)
    .then((response) => response.json(),
    error => console.log('An error occured', error))
    .then((json) => {
      const newCoords = json.results[0].geometry.location;
      dispatch(requestCoords(newCoords));
    });
  };
}
