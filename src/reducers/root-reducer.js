import { combineReducers } from 'redux';
import { houses } from './houses-reducer';
import { members } from './members-reducer';

const rootReducer = combineReducers({
  houses,
  members
});


export default rootReducer;
