import React from 'react';

const Card = ({ name, founded, seats, titles, coatOfArms,
ancestralWeapons, words }) => {
  return (
    <div className='Card'>
      <h1>{name}</h1>
      <h2>{words}</h2>
      <h3>Founded: { founded ? founded : 'N/A'}</h3>
      {iterator(seats, 'Seats')}
      {iterator(titles, 'Titles')}
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
    </div>
  )
}

const iterator = (array, text) => {
  return array.map((i) => <p>{text}: {i}</p>)
}

export const CardList = ({ array }) => {
  const componentArray = array.map((house) => <Card key={house.id} {...house} />);
  return (
    <div className='Container'>
      {componentArray}
    </div>
  )
};
