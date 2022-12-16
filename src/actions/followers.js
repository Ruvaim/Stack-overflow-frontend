import * as api from '../api';

export const addFollower = (value, userId) => async (dispatch) => {
  try {
    const { data } = await api.addFollower(value, userId);
    dispatch({ type: 'ADD_FOLLOWER', payload: data });
    dispatch(fetchAllFollowers());
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllFollowers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFollowers();
    dispatch({ type: 'FETCH_FOLLOWERS', payload: data });
  } catch (error) {
    console.log(error);
  }
};
