import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<Provider store={{}}><App /></Provider>);
  });

  it('should exist', () => {
    expect(app.toBeDefined());
  });

  it('should match snapshot', () => {
    expect(app).toMatchSnapshot();
  });

});