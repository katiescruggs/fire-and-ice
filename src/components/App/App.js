import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchHouses } from '../../helpers/apiCalls';
import { fakeAction, setHouses } from '../../actions';
import CardContainer from '../CardContainer/CardContainer';
class App extends Component {

  async componentDidMount() {
    const houses = await fetchHouses();
    this.props.setHouses(houses);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ 
  fakeAction: () => dispatch(fakeAction()),
  setHouses: (houses) => dispatch(setHouses(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
