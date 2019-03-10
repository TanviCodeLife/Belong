import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestCoords = ({ lat, lng }) => ({
  type: types.GET_COORDS,
  lat: lat,
  lng: lng
})


export const saveHoods = (hoodName, hoodLat , hoodLng, hoodId) => ({
  type: types.SAVE_HOOD,
    hoodName: hoodName,
    hoodLat: hoodLat,
    hoodLng: hoodLng,
    hoodId: hoodId
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
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${ newCoords.lat }, ${ newCoords.lng }&radius=5000&type=neighborhood&key=${ process.env.GOOGLE_API_KEY }`).then((response) => response.json(),
  error => console.log('An error occurred.', error))
  .then(function(json) {
    if(json.results) {
      console.log('hoods', json.results);
      json.results.forEach(hood => {
        const displayName = hood.displayName;
        const hoodLat = hood.location.lat;
        const hoodLng = hood.location.lng;
        const hoodId = v4();
        console.log(displayName);
        dispatch(saveHoods(displayName, hoodLat, hoodLng, hoodId));
      })
    } else {
      console.log('No neighborhoods found');
    }
    dispatch(requestCoords(newCoords));

  });
}
