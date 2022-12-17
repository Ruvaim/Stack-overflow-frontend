import React from 'react';
import Avatar from '../../Components/Avatar/Avatar';
import Like from '../../assets/heart-regular.svg';
import Liked from '../../assets/heart-solid.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Posts = ({ Post }) => {
  var User = useSelector((state) => state.currentUserReducer);

  return (
    <div className="postContainer">
      <div className="postHeading">
        <Avatar
          backgroundColor="#a7bcff"
          px="10px"
          py="7px"
          borderRadius="50%"
          color="white"
          textDecoration="none"
        >
          <Link
            to={`/Users/${Post.userId}`}
            style={{ color: 'white', textDecoration: 'none' }}
          >
            {Post.userPosted.charAt(0).toUpperCase()}
          </Link>
        </Avatar>
        <Link to={`/Community/${Post._id}`} className="postTitle">
          <h3>{Post.postTitle}</h3>
        </Link>
      </div>
      <div className="postDesc">
        <p>{Post.postDesc}</p>
      </div>
      <div className="postImg">
        <img
          src={`https://rk-stack-overflow.onrender.com/community/getPost/photo/${Post._id}`}
          alt=""
        />
      </div>
      <div className="postAction">
        <div className="postActionBtn">
          <button className="likeBtn">
            <p>{Post.postLikes.length}</p>
            {Post.postLikes.findIndex(
              (id) => id === String(User.result._id)
            ) === -1 ? (
              <img src={Like} alt="Like" width={18} />
            ) : (
              <img src={Liked} alt="Like" width={18} />
            )}
          </button>
        </div>
        <p>Posted {moment(Post.postedOn).fromNow()}</p>
      </div>
    </div>
  );
};

export default Posts;
