import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houses } from './houses-reducer';

const rootReducer = combineReducers({
  fake,
  houses
});


export default rootReducer;
