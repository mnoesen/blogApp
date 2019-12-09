export default (state = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    switch (action.type) {
      case 'FETCH_POSTS':
        return action.payload;
      default:
        return state;
    }
  }
  return state;
};