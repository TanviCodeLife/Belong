import getCoordsReducer from './getCoords';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentCoords: getCoordsReducer
});

export default rootReducer;
