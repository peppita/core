import Immutable from 'immutable';

export default (state = Immutable.Map(), action) => {
  if (action.type === 'love') {
    return state;
  }
  return state;
};
