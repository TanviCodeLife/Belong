import getCoordsReducer from './getCoords';
import hoodsListReducer from './hoodsListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentCoords: getCoordsReducer
  masterHoodsList: hoodsListReducer
});

export default rootReducer;
