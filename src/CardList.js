import React from 'react';
import { Card } from './Card.js';

export const CardList = ({ array, showMore }) => {
  const componentArray = array.map((house) => <Card key={house.id} showMore={showMore} { ...house} /> );
  return (
    <div className='Container'>
      {componentArray}
    </div>
  )
};
