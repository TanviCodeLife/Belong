import * as types from './../constants/ActionTypes';

export default (state = {}, action) => {
  let newSate;
  const { displayName, hoodLat, hoodLng, id } = action;
  switch(action.type) {
    case 'SAVE_HOOD':
      newState = Object.assign({}, state, {
        [id]:{
          displayName: displayName,
          hoodLat: hoodLat,
          hooLng: hoodLng,
          id: id,
          commuteTime: 0,
          rentalRate: 0,
          buyRate: 0
        }
      });
      return newState;
    default:
    return state;
  }

}
