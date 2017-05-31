import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './CardList.js';
import { Loading } from './Loading.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      location: 'house',
      houses: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/houses')
    .then((result) => result.json())
    .then((houses) => this.setState({ houses: houses, loading: false }) );
  }

  render() {
    const { loading, houses } = this.state
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { loading ? <Loading /> : <CardList array={houses} /> }
        </div>
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
