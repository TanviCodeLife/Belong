import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestCoords = ({ lat, lng }) => ({
  type: types.GET_COORDS,
  lat: lat,
  lng: lng
})
