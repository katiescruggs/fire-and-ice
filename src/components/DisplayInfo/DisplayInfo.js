import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../../helpers/apiCalls';
import { setHouses } from '../../actions';
import CardContainer from '../CardContainer/CardContainer';

class DisplayInfo extends Component {
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

const mapStateToProps = ({ houses }) => ({ houses });
const mapDispatchToProps = dispatch => ({ 
  setHouses: (houses) => dispatch(setHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayInfo);