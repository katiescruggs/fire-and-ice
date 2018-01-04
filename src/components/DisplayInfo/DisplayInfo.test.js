import React from 'react';
import { shallow } from 'enzyme';
import { DisplayInfo, mapStateToProps, mapDispatchToProps} from './DisplayInfo';

describe('DisplayInfo Container', () => {
  describe('DisplayInfo', () => {
    let displayInfo;
    const mockHouses = ['an', 'array', 'of', 'houses'];
    const mockSetHouses = jest.fn();

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        houses: ['array', 'of', 'houses']
      })
    }));

    beforeEach(() => {
      displayInfo = shallow(<DisplayInfo houses={mockHouses} setHouses={mockSetHouses} />);
    });

    it('should exist', () => {
      expect(displayInfo).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(displayInfo).toMatchSnapshot();
    });

    it('should display connected card container if there are houses', () => {
      displayInfo = shallow(<DisplayInfo houses={mockHouses} setHouses={mockSetHouses} />);
      expect(displayInfo.find('Connect').length).toEqual(1);
      expect(displayInfo.find('img').length).toEqual(0);
    });

    it('should display loading gif if there are no houses', () => {
      displayInfo = shallow(<DisplayInfo houses={[]} setHouses={mockSetHouses} />);

      expect(displayInfo.find('img').length).toEqual(1);
      expect(displayInfo.find('Connect').length).toEqual(0);
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

  describe('mapDispatchToProps', () => {
    it('connects dispatch to setHouses in props', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.setHouses();

      expect(mockDispatch).toHaveBeenCalled;
    });
  });
});