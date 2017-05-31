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
      houses: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/houses')
    .then((result) => result.json())
    .then((houses) => this.setState({ houses: houses, loading: false }) );
  }

  findHouse(name) {
    return this.state.houses.find((house) => house.name === name);
  }

  handleLocation(name) {
    const house = this.findHouse(name);

    if(house.members) return null;

    house.members = [];
    const promises = house.swornMembers.map((url) => {
      return fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({url: url})
      })
      .then((result) => result.json())
      .catch((err) => console.log(err))
    });

    Promise.all(promises).then((array) => {
      array.forEach((char) => {
        house.members[house.members.length] = { name: char.name, died: char.died }
      });
      this.setState({ houses: this.state.houses })
    });
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
          { loading ? <Loading /> : <CardList array={houses} showMore={this.handleLocation.bind(this)}/> }
        </div>
      </div>
    );
  }
}

export default App;
