import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestCoords = (lat, lng , showMap) => ({
  type: types.GET_COORDS,
  lat: lat,
  lng: lng,
  showMap: showMap
})


export const saveHoods = (hoodName, hoodLat , hoodLng, hoodId, hoodDistance, hoodCommuteTime) => ({
  type: types.SAVE_HOOD,
    hoodName: hoodName,
    hoodLat: hoodLat,
    hoodLng: hoodLng,
    hoodId: hoodId,
    hoodDistance: hoodDistance,
    hoodCommuteTime: hoodCommuteTime
});

export function fetchCoords(address, showMap){
  return function(dispatch){
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+process.env.GOOGLE_API_KEY)
    .then((response) => response.json(),
    error => console.log('An error occured', error))
    .then((json) => {
      console.log(json);
      const newCoords = json.results[0].geometry.location;
      showMap = true;
      console.log(newCoords);
      dispatch(requestCoords(newCoords.lat, newCoords.lng, showMap));
      fetchNeighborhoods(newCoords, dispatch);
    });
  };
}

export function fetchNeighborhoods(newCoords, dispatch){
  const originsArr = [];
  let originsData = {};
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${ newCoords.lat }, ${ newCoords.lng }&radius=5000&type=neighborhood&key=${ process.env.GOOGLE_API_KEY }`).then((response) => response.json(),
  error => console.log('An error occurred.', error))
  .then(function(json) {
    if(json.results) {
      console.log('hoods', json.results);
      json.results.forEach((hood, i) => {
        const displayName = hood.name;
        const hoodLat = hood.geometry.location.lat;
        const hoodLng = hood.geometry.location.lng;
        originsArr.push(hoodLat + ',' + hoodLng);
        const hoodId = v4();
        originsData = Object.assign({}, originsData, {
          [i]: {
          displayName: displayName,
          hoodLat: hoodLat,
          hoodLng: hoodLng,
          hoodId: hoodId
          }
        });
      });
    } else {
      console.log('No neighborhoods found');
    }
    const origins = originsArr.join('|');
    console.log(origins, 'origins');
    fetchDistanceAndTime(origins, newCoords, dispatch, originsData);
  });
}

export function fetchDistanceAndTime(origins, newCoords, dispatch, originsData){
  let hoodData = {};
  return fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ origins }&destinations=${ newCoords.lat }, ${ newCoords.lng }&key=${ process.env.GOOGLE_API_KEY }`)
  .then((response) => response.json(),
  error => console.log('An error occurred.', error))
  .then(function(json) {
    console.log(json.origin_addresses, "addresses");
    if(json.origin_addresses) {
      console.log('distances', json.rows);
      json.rows.forEach((hood, i) => {
        const hoodDistance = hood.elements[0].distance.text;
        const hoodCommuteTime = hood.elements[0].duration.text;
        dispatch(saveHoods(originsData[i].displayName, originsData[i].hoodLat, originsData[i].hoodLng, originsData[i].hoodId, hoodDistance, hoodCommuteTime));
      });
    }
  });
}
