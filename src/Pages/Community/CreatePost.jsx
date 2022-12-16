import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createaPost, fetchAllPosts } from '../../actions/community';
import Add from '../../assets/addAvatar.png';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import CommunityHeader from './CommunityHeader';

const CreatePost = () => {
  const User = useSelector((state) => state.currentUserReducer);
  const [values, setValues] = useState({
    postTitle: '',
    postDesc: '',
    photo: '',
    userPosted: User.result.name,
    userId: User.result._id,
  });

  let { postTitle, postDesc } = values;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    createaPost(values).then(() => {
      setValues({
        ...values,
        postTitle: '',
        postDesc: '',
        photo: '',
      });
      dispatch(fetchAllPosts());
      navigate('/Community');
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <CommunityHeader />
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Post your query</span>
            <form className="createPostForm" onSubmit={handleSubmit}>
              <input
                className="postInput"
                type="text"
                placeholder="Enter post title"
                onChange={handleChange('postTitle')}
                value={postTitle}
              />
              <textarea
                className="postTextarea"
                placeholder="Enter post description"
                onChange={handleChange('postDesc')}
                value={postDesc}
              />
              <input
                className="postInput"
                style={{ display: 'none' }}
                type="file"
                id="file"
                onChange={handleChange('photo')}
              />
              <label className="postLabel" htmlFor="file">
                <img className="addImg" src={Add} alt="" />
                <span>Select photo from here</span>
              </label>
              <input type="submit" value="Post" className="postBtn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
