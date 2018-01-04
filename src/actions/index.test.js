import * as actions from './index';

describe('all actions', () => {
  it('setHouses action returns object with houses', () => {
    const houses = ['an', 'array', 'of', 'houses'];
    const expected = {
      type: 'SET_HOUSES',
      houses
    };

    expect(actions.setHouses(houses)).toEqual(expected);
  });
});