import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  let appHeader;
  beforeEach(() => {
    appHeader = shallow(<AppHeader />);
  });

  it('should exist', () => {
    expect(appHeader).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(appHeader).toMatchSnapshot();
  });
});