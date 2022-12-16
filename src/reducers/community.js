const communityReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case 'FETCH_ALL_POSTS':
      return { ...state, data: action.payload };
    case 'FETCH_A_POST':
      return { ...state, data: action.payload };

    case 'SHARE_A_POST':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default communityReducer;
