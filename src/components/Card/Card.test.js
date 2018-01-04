import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps } from './Card';

describe('Card Container', () => {
  describe('Card', () => {
    let card;

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        member: 'I am a sworn member!'
      })
    }));
    const mockHouse = {
      name: 'NAME',
      founded: 'FOUNDED',
      seats: 'SEATS',
      titles: 'TITLES',
      coatOfArms: 'COATOFARMS',
      ancestralWeapons: 'ANCESTRALWEAPONS',
      words: 'WORDS',
      swornMembers: ['array', 'of', 'api', 'urls']
    };

    const mockIndex = 0;

    const mockMembers = {
      NAME: ['array', 'of', 'members'],
      memberTwo: ['array', 'of', 'members']
    };

    beforeEach(() => {
      card = shallow(
        <Card 
          house={mockHouse}
          index={mockIndex}
          members={mockMembers} />);
    });

    it('should exist', () => {
      expect(card).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(card).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('connects members to props', () => {
      const mockStore = {
        members: {
          membersOne: ['array', 'of'],
          membersTwo: ['member', 'names']
        }
      };

      const result = mapStateToProps(mockStore);

      expect(result.members).toEqual(mockStore.members);
    });
  });
});