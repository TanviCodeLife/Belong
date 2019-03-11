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
    hoodId: hoodId,
    hoodDistance: 0,
    hoodCommuteTime: 0
});

export const saveCommutes = (hoodDistance, hoodCommuteTime) => ({
  type: types.SAVE_COMMUTE,
    hoodDistance: hoodDistance,
    hoodCommuteTime: hoodCommuteTime
});


export function fetchCoords(address){
  return function(dispatch){
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+process.env.GOOGLE_API_KEY)
    .then((response) => response.json(),
    error => console.log('An error occured', error))
    .then((json) => {
      console.log(json);
      const newCoords = json.results[0].geometry.location;
      console.log(newCoords);
      dispatch(requestCoords(newCoords));
      fetchNeighborhoods(newCoords, dispatch);
    });
  };
}

export function fetchNeighborhoods(newCoords, dispatch){
  const originsArr = [];
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${ newCoords.lat }, ${ newCoords.lng }&radius=5000&type=neighborhood&key=${ process.env.GOOGLE_API_KEY }`).then((response) => response.json(),
  error => console.log('An error occurred.', error))
  .then(function(json) {
    if(json.results) {
      console.log('hoods', json.results);
      json.results.forEach(hood => {
        const displayName = hood.name;
        const hoodLat = hood.geometry.location.lat;
        const hoodLng = hood.geometry.location.lng;
        originsArr.push(hoodLat + ',' + hoodLng);
        const hoodId = v4();
        console.log(originsArr, 'originsArr');
        dispatch(saveHoods(displayName, hoodLat, hoodLng, hoodId));
      });
    } else {
      console.log('No neighborhoods found');
    }
    const origins = originsArr.join('|');
    console.log(origins);
    fetchDistanceAndTime(origins, newCoords, dispatch);
  });
}

export function fetchDistanceAndTime(origins, newCoords, dispatch){
  return fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ origins }&destinations=${ newCoords }&key=${ process.env.GOOGLE_API_KEY }`)
  .then((response) => response.json(),
  error => console.log('An error occurred.', error))
  .then(function(json) {
    if(json.origin_addresses) {
      console.log('distances', json.origin_addresses);
      json.rows.forEach(hood => {
        const hoodDistance = hood.elements[0].distance.text;
        const hoodCommuteTime = hood.elements[1].duration.text;
        console.log(hoodDistance, hoodCommuteTime);
        dispatch(saveCommutes(hoodDistance, hoodCommuteTime));
      })
    }
  });
}
