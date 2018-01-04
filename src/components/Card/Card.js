import React from 'react';

const Card = ({ house }) => {
  const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = house;

  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{words}</h4>
      <h4>Founded: {founded}</h4>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
    </div>
  );
}

export default Card;