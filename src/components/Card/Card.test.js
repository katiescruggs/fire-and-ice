import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

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

  beforeEach(() => {
    card = shallow(<Card house={mockHouse} />);
  });

  it('should exist', () => {
    expect(card).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(card).toMatchSnapshot();
  });
});