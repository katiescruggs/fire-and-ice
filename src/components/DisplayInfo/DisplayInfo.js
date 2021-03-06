import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHouses, getMemberArray } from '../../helpers/apiCalls';
import { setHouses, setMembers } from '../../actions';
import CardContainer from '../CardContainer/CardContainer';
import PropTypes from 'prop-types';

export class DisplayInfo extends Component {
  async componentDidMount() {
    const houses = await fetchHouses();
    this.props.setHouses(houses);

    houses.forEach(house => {
      getMemberArray(this.props.setMembers, house.name, house.swornMembers);
    });
  }

  render() {
    const {houses, members} = this.props;
    const memberLength = Object.keys(members).length;
    return (
      <div className='Display-info'>
            
        {(memberLength === 0 || memberLength < houses.length) && 
          <img id='wolf' src='../../wolf.gif' alt='running wolf gif'/>
        }

        {(houses.length === memberLength) &&
          <CardContainer />
        }
          
      </div>
    );
  }
}

export const mapStateToProps = ({ houses, members }) => ({ 
  houses,
  members
});

export const mapDispatchToProps = dispatch => ({ 
  setHouses: (houses) => dispatch(setHouses(houses)),
  setMembers: (houseMembers) => dispatch(setMembers(houseMembers))
});

DisplayInfo.propTypes = {
  setHouses: PropTypes.func,
  setMembers: PropTypes.func,
  houses: PropTypes.array,
  members: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayInfo);