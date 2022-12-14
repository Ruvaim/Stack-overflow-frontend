import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://rk-stack-overflow.onrender.com',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('Profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('Profile')).token
    }`;
  }
  return req;
});

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) =>
  API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });
export const fetchAllVotes = (id) => API.get(`/questions/getVotes/${id}`);
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

export const sharePost = (post) => API.post(`/community/create/post`, post);
export const getAllPost = () => API.get('/community/getAllPost');
export const getPost = (id) => API.get(`/community/getPost,${id}`);
export const getPostPhoto = (id) => API.get(`/community/getPost/photo/${id}`);

export const likePost = (id, value, userId) =>
  API.patch(`/community/like/${id}`, { value, userId });

export const deletePost = (id) => API.delete(`/community/delete/post/${id}`);

export const addFollower = (value, userId) =>
  API.patch(`/follow/followers`, { value, userId });

export const fetchFollowers = () => API.get('/follow/get/followers');
