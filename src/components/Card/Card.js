import React from 'react';
import './Card.css';
import { fetchMembers, getMemberArray } from '../../helpers/apiCalls';
import { setMembers } from '../../actions';
import { connect } from 'react-redux';

const Card = ({ house, setMembers }) => {
  const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = house;
  const displayFounded = founded ? founded : 'N/A';
  const swornMembers = getMemberArray(setMembers, house.name, house.swornMembers);
  
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{words}</h4>
      <h4>Founded: {displayFounded}</h4>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setMembers: (houseMembers) => dispatch(setMembers(houseMembers))
});

export default connect(null, mapDispatchToProps)(Card);