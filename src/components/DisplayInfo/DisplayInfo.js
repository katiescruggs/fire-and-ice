import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../../helpers/apiCalls';
import { setHouses } from '../../actions';
import CardContainer from '../CardContainer/CardContainer';
import PropTypes, { shape, func, string } from 'prop-types';

export class DisplayInfo extends Component {
  async componentDidMount() {
    const houses = await fetchHouses();
    this.props.setHouses(houses);
  }

  render() {
    return (
      <div className='Display-info'>
            
          {this.props.houses.length === 0 && 
            <img src='../../wolf.gif' />
          }

          {this.props.houses.length > 0 &&
            <CardContainer />
          }
          
      </div>
      );
  }
}

export const mapStateToProps = ({ houses }) => ({ houses });
export const mapDispatchToProps = dispatch => ({ 
  setHouses: (houses) => dispatch(setHouses(houses))
});

DisplayInfo.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayInfo);