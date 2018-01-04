export const members = (state = {}, action) => {
  switch(action.type) {
  case 'SET_MEMBERS':
    console.log(action);
    return {...state, ...action.houseMembers};
  default:
    return state;
  }
};