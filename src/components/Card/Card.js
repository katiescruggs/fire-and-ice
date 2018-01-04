import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Card = ({ house, index, members }) => {
  const {
    name, 
    founded, 
    seats, 
    titles, 
    coatOfArms, 
    ancestralWeapons, 
    words
  } = house;

  const displayFounded = founded ? founded : 'N/A';
  
  const displayMembers = (memberClass) => {
    document.querySelector(`.${memberClass}`).classList.toggle('hide');
  };
  
  const memberClass = `members-${index}`;

  return (
    <div className="card" onClick={() => displayMembers(memberClass)}>
      <h3>{name}</h3>
      <h4>{words}</h4>
      <h4>Founded: {displayFounded}</h4>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      <p className={`${memberClass} hide`}>
        Members: {members[name].join(', ')}
      </p>
    </div>
  );
};

export const mapStateToProps = state => ({
  members: state.members
});

Card.propTypes = {
  house: PropTypes.object,
  index: PropTypes.number,
  members: PropTypes.object
};

export default connect(mapStateToProps, null)(Card);