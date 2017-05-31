import React from 'react';
import { Card } from './Card.js';

export const CardList = ({ array }) => {
  const componentArray = array.map((house) => <Card key={house.id} {...house} />);
  return (
    <div className='Container'>
      {componentArray}
    </div>
  )
};
