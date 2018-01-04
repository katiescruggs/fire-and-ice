import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';

describe('CardContainer Container', () => {
  describe('CardContainer', () => {
    let cardContainer;
    const mockHouses = ['array', 'of', 'houses'];

    beforeEach(() => {
      cardContainer = shallow(<CardContainer houses={mockHouses} />);
    });

    it('should exist', () => {
      expect(cardContainer).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(cardContainer).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('connects houses to props', () => {
      const mockStore = {
        houses: ['array', 'of', 'houses']
      };

      const result = mapStateToProps(mockStore);

      expect(result.houses).toEqual(mockStore.houses);
    });
  });
});