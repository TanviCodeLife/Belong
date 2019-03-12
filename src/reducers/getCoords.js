import constants as types from './../constants';


const { types, initialState } = constants;

const getCoordsReducer = (state = initialState.userCoords, action) => {
  let newCoords ;
  let newCoordsStateSlice;
  switch (action.type) {
    case types.GET_COORDS:
      newCoords = {
        lat: action.lat,
        lng: action.lng,
        showMap: action.showMap
      }
      newCoordsStateSlice = Object.assign({},   state, newCoords);
      return newCoordsStateSlice;
    default:
      return state;
  }
};

export default getCoordsReducer;
