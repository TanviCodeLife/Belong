import * as types from './../constants/ActionTypes';

export default (state = {}, action) => {
  let newState;
  const { hoodName, hoodLat, hoodLng, hoodId, hoodDistance, hoodCommuteTime } = action;
  switch(action.type) {
    case 'SAVE_HOOD':
      newState = Object.assign({}, state, {
        [hoodId]:{
          hoodName: hoodName,
          hoodLat: hoodLat,
          hoodLng: hoodLng,
          hoodId: hoodId,
          hoodDistance: hoodDistance,
          hoodCommuteTime: hoodCommuteTime
        }
      });
      return newState;
    default:
    return state;
  }

}
