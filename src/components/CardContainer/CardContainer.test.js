import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';

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