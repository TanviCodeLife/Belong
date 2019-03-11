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
    hoodName: 'Bethany',
    hoodLat: 45.56433759999999,
    hoodLng: -122.8411631,
    hoodId: 0,
    hoodDistance: 2,
    hoodCommuteTime: 1
  }

  test('should return default state if no action type is defined', () => {
    expect(hoodsListReducer({}, {type: null})).toEqual({});
  });

  test('should add a new neighborhood to the masterHoodsList', () => {
    const { hoodName, hoodLat, hoodLng, hoodId, hoodDistance, hoodCommuteTime } = sampleHoodData;
    action = {
      type: 'SAVE_HOOD',
      hoodName: hoodName,
      hoodLat: hoodLat,
      hoodLng: hoodLng,
      hoodId: hoodId,
      hoodDistance: hoodDistance,
      hoodCommuteTime: hoodCommuteTime
    };
    expect(hoodsListReducer({}, action)).toEqual({
      [hoodId] : {
        hoodName: hoodName,
        hoodLat: hoodLat,
        hoodLng: hoodLng,
        hoodId: hoodId,
        hoodDistance: hoodDistance,
        hoodCommuteTime: hoodCommuteTime
      }
    });
  });
});
