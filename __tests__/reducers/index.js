import rootReducer from './../../src/reducers/index';
import getCoordsReducer from './../../src/reducers/getCoords';
import hoodsListReducer from './../../src/reducers/hoodsListReducer';
import { createStore } from 'redux';
import constants from './../../src/constants';
import * as actions from './../../src/actions';

let store = createStore(rootReducer);
const { types } = constants;

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      currentCoords: {},
      masterHoodsList: {}
    });
  });

  test('should return default state for getCoords if no action type is recognized', () => {
    expect(store.getState().currentCoords).toEqual(getCoordsReducer(undefined, {type: null}));
  });

  test('should return default state for hoodsListReducer if no action types is recognized', () => {
    expect(store.getState().masterHoodsList).toEqual(hoodsListReducer(undefined, {type: null}));
  });
});

describe('getCoordsReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(getCoordsReducer({}, {type: null})).toEqual({});
  });
});


describe('hoodListReducer', () => {
  let action;
  const sampleHoodData = {
    displayName: 'Bethany',
    hoodLat: 45.56433759999999,
    hoodLng: -122.8411631,
    id: 0,
    commuteTime: 0,
    rentalRate: 0,
    buyRate: 0
  }

  test('should return default state if no action type is defined', () => {
    expect(hoodsListReducer({}, {type: null})).toEqual({});
  });
});
