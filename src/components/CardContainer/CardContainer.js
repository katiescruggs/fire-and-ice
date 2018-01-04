import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import './CardContainer.css';

const CardContainer = ({ houses }) => {
  const cards = houses.map(house => <Card house={house} />);

  return (
    <div className="card-container">
      {cards}
    </div>
  );
}

const mapStateToProps = ({ houses }) => ({
  houses
});

export default connect(mapStateToProps, null)(CardContainer);