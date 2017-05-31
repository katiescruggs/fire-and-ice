import React from 'react';

const iterator = (array, text) => {
  return array.map((i, index) => <p key={index}>{text}: {i}</p>)
}

export const Card = ({ name, founded, seats, titles, coatOfArms,
                ancestralWeapons, words, showMore, members }) => {
  let membersLog;
  if(members) {
    membersLog = members.map((char) => <div>{ char.name }: { char.died ? char.died : 'Alive' }</div>)
  }

  return (
    <div className='Card'
         onClick={ () => showMore(name) } >
      <h1>{name}</h1>
      <h2>{words}</h2>
      <h3>Founded: { founded ? founded : 'N/A'}</h3>
      {iterator(seats, 'Seats')}
      {iterator(titles, 'Titles')}
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      { membersLog }
    </div>
  )
}
