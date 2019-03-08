import rootReducer from './../../src/reducers/index';
import getCoordsReducer from './../../src/reducers/getCoords';
import { createStore } from 'redux';
import constants from './../../src/constants';
import * as actions from './../../src/actions';

let store = createStore(rootReducer);
const { types } = constants;

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      currentCoords: {}
    });
  });

  test('should return default state for getCoords if no action type is recognized', () => {
    expect(store.getState().currentCoords).toEqual(getCoordsReducer(undefined, {type: null}));
  });
});
