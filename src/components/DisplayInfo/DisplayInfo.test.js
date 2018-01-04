import React from 'react';
import { shallow } from 'enzyme';
import { DisplayInfo, mapStateToProps, mapDispatchToProps} from './DisplayInfo';

describe('DisplayInfo Container', () => {
  describe('DisplayInfo', () => {
    let displayInfo;
    const mockHouses = ['an', 'array', 'of', 'houses'];
    const mockSetHouses = jest.fn();

    const mockMembers = {
      membersOne: ['array', 'of', 'member', 'names'],
      membersTwo: ['array', 'of', 'member', 'names']
    };
    const mockSetMembers = jest.fn();

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        [{name: 'NAME', swornMembers: ['sworn', 'members']}]
      )
    }));

    beforeEach(() => {
      displayInfo = shallow(
        <DisplayInfo 
          houses={mockHouses}
          members={mockMembers} 
          setHouses={mockSetHouses}
          setMembers={mockSetMembers} />);
    });

    it('should exist', () => {
      expect(displayInfo).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(displayInfo).toMatchSnapshot();
    });

    it('should display loading gif if there are no houses', () => {
      displayInfo = shallow(
        <DisplayInfo 
          houses={[]}
          members={{}} 
          setHouses={mockSetHouses}
          setMembers={mockSetMembers} />);

      expect(displayInfo.find('img').length).toEqual(1);
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