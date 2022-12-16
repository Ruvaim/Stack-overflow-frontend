import axios from 'axios';
import * as api from '../api';

export const createaPost = async (data) => {
  await axios.post(`http://localhost:5000/community/create/post`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const fetchAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllPost();
    dispatch({ type: 'FETCH_ALL_POSTS', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const fetchPost = () => async (dispatch) => {
  try {
    const { data } = await api.getPost();
    dispatch({ type: 'FETCH_A_POST', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPhoto = (id) => async (dispatch) => {
  try {
    await api.getPostPhoto(id);
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id, value, userId) => async (dispatch) => {
  try {
    await api.likePost(id, value, userId);
    dispatch({ type: 'LIKE' });
    dispatch(fetchAllPosts());
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id, navigate) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch(fetchAllPosts());
    dispatch(navigate('/Community'));
  } catch (error) {
    console.log(error);
  }
};
