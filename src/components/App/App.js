import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import AppHeader from '../AppHeader/AppHeader';
import DisplayInfo from '../DisplayInfo/DisplayInfo';
import './App.css';


const App = () => (
  <div className='App'>
    <AppHeader />
    <DisplayInfo />
  </div>
);

App.propTypes = {

};

export default App;
