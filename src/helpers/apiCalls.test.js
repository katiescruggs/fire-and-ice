import {fetchHouses, getMemberArray, fetchMembers, fetchMember} from './apiCalls';

describe('apiCalls', () => {
  describe('fetchHouses', () => {
    const houseData = ['i', 'am', 'house', 'data'];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({houseData: houseData})
    }));

    it('is a function', () => {
      expect(fetchHouses).toBeAFunction;
    });
  });

  describe('getMemberArray', () => {
    it('is a function', () => {
      expect(getMemberArray).toBeAFunction;
    });
  });

  describe('fetchMembers', () => {
    it('is a function', () => {
      expect(fetchMembers).toBeAFunction;
    });
  });

  describe('fetchMember', () => {
    it('is a function', () => {
      expect(fetchMember).toBeAFunction;
    });
  });
});

    