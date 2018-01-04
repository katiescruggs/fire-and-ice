import {houses} from './houses-reducer';
import * as actions from '../actions';

describe('housesReducer', () => {
  it('should return an empty array by default', () => {
    const expected = [];
    const fakeAction = {type: ''};

    expect(houses(undefined, fakeAction)).toEqual(expected);
  });

  it('should return houses when setHouses action is dispatched', () => {
    const houseArray = ['an', 'array', 'of', 'houses'];
    const action = actions.setHouses(houseArray);
    
    expect(houses(undefined, action)).toEqual(houseArray);
  });
});
