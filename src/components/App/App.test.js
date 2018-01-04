import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should exist', () => {
    expect(app).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(app).toMatchSnapshot();
  });

});