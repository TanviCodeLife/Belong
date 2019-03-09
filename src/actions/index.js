import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestCoords = ({ lat, lng }) => ({
  type: types.GET_COORDS,
  lat: lat,
  lng: lng
})


export const saveHoods = (hoodName, hoodlat , hoodlng) => ({
  type: types.SAVE_HOODS,
    hoodName: hoodName,
    hoodLat: hoodLat,
    hoodLng: hoodLng
});

export function fetchCoords(address){
  return function(dispatch){
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+process.env.GOOGLE_API_KEY)
    .then((response) => response.json(),
    error => console.log('An error occured', error))
    .then((json) => {
      const newCoords = json.results[0].geometry.location;
      console.log(newCoords);
      fetchNeighborhoods(newCoords, dispatch);
    });
  };
}

export function fetchNeighborhoods(newCoords, dispatch){
  console.log(newCoords);
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${ newCoords.lat }, ${ newCoords.lng }&radius=5000&type=neighborhood&key=${ process.env.GOOGLE_API_KEY }`)
  .then((response) => response.json(),
  error => console.log('An error occurred.', error))
  .then(function(json) {
    if(json.results) {
      console.log('Neighborhoods', json.results[1].name);
      console.log('Neighborhoods', json.results[2].name);
    } else {
      console.log('No neighborhoods found');
    }
    dispatch(requestCoords(newCoords));
  });
}
