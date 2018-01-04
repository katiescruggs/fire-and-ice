import React from 'react';
import './Card.css';
import { fetchMembers, getMemberArray } from '../../helpers/apiCalls';
import { setMembers } from '../../actions';
import { connect } from 'react-redux';

const Card = ({ house, setMembers, houses, members }) => {
  const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = house;
  const displayFounded = founded ? founded : 'N/A';
  // const swornMembers = getMemberArray(setMembers, house.name, house.swornMembers);
  console.log(name);

  console.log(members[name]);

  const displayMembers = members[name].join(', ');


  return (
    <div className="card" onClick={displayMembers}>
      <h3>{name}</h3>
      <h4>{words}</h4>
      <h4>Founded: {displayFounded}</h4>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      <p>Members: {displayMembers}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  houses: state.houses,
  members: state.members
});

const mapDispatchToProps = dispatch => ({
  setMembers: (houseMembers) => dispatch(setMembers(houseMembers))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);