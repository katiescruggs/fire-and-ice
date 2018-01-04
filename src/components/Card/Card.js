import React from 'react';
import './Card.css';

const Card = ({ house }) => {
  const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = house;

  const displayFounded = founded ? founded : 'N/A';

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
}

export default Card;