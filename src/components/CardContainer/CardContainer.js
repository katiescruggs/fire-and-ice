import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import './CardContainer.css';

export const CardContainer = ({ houses }) => {
  const cards = houses.map((house, index) => 
    <Card 
      key={`card-${index}`}
      index={index}
      house={house} />);

  return (
    <div className="card-container">
      {cards}
    </div>
  );
}

export const mapStateToProps = ({ houses }) => ({
  houses
});

export default connect(mapStateToProps, null)(CardContainer);