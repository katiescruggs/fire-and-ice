import React from 'react';
import './Card.css';
import { fetchMembers } from '../../helpers/apiCalls';

const getMemberArray = async (swornMembers) => {
  const members = await fetchMembers(swornMembers);
  console.log(members);
}


const Card = ({ house }) => {
  const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = house;
  const displayFounded = founded ? founded : 'N/A';
  const swornMembers = getMemberArray(house.swornMembers);
  
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