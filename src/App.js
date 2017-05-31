import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      location: 'house'
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/houses')
    .then((result) => result.json())
    .then((houses) => console.log(houses))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

// OOhkay. This is a website for GOT nerds, pretty sweet right!?
// We got some sweet css but lets work on getting this app fully functional.
// First thing we want to do is fetch some info for us to display.
// Mmmm... lets grab all the important houses in Westeros from --> http://localhost:3001/api/v1/houses.
// Once we've grabbed our data lets go ahead and make a house reducer and an action to add them!

export default App;
