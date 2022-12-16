import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '../../Components/Avatar/Avatar';
import Like from '../../assets/heart-regular.svg';
import Liked from '../../assets/heart-solid.svg';
import Share from '../../assets/share-solid.svg';
import Remove from '../../assets/trash-solid.svg';
import { deletePost, likePost } from '../../actions/community';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import moment from 'moment';

const PostDetails = () => {
  const { id } = useParams();

  const url = 'http://localhost:3000';

  const Posts = useSelector((state) => state.communityReducer);

  var User = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDelete = () => {
    dispatch(deletePost(id, navigate));
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert('Copied url :' + url + location.pathname);
  };

  const handleLike = () => {
    dispatch(likePost(id, 'like', User.result._id));
  };

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        {Posts.data === null ? (
          <h1 style={{ marginTop: '50px' }}>Loading...</h1>
        ) : (
          <>
            {Posts.data
              .filter((post) => post._id === id)
              .map((Post) => (
                <div className="postDetailContainer">
                  <div className="postDetailHeading">
                    <Avatar
                      backgroundColor="#a7bcff"
                      px="10px"
                      py="7px"
                      borderRadius="50%"
                      color="white"
                      textDecoration="none"
                    >
                      <Link
                        to={`/Users/${User?.result?._id}`}
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        {Post.userPosted.charAt(0).toUpperCase()}
                      </Link>
                    </Avatar>
                    <div className="postDetailTitle">
                      <h3>{Post.postTitle}</h3>
                    </div>
                  </div>
                  <div className="postDetailDesc">
                    <p>{Post.postDesc}</p>
                  </div>
                  <div className="postDetailImg">
                    <img
                      src={`http://localhost:5000/community/getPost/photo/${Post._id}`}
                      alt=""
                    />
                  </div>
                  <div className="postDetailAction">
                    <div className="postDetailActionBtn">
                      <button className="likeBtn" onClick={handleLike}>
                        <p>{Post.postLikes.length}</p>

                        {Post.postLikes.findIndex(
                          (id) => id === String(User.result._id)
                        ) === -1 ? (
                          <img src={Like} alt="Like" width={18} />
                        ) : (
                          <img src={Liked} alt="Like" width={18} />
                        )}
                      </button>

                      <button className="likeBtn" onClick={handleShare}>
                        <img src={Share} alt="" width={18} />
                      </button>
                      {User?.result?._id === Post?.userId && (
                        <button className="likeBtn" onClick={handleDelete}>
                          <img src={Remove} alt="" width={18} />
                        </button>
                      )}
                    </div>
                    <p>Posted {moment(Post.postedOn).fromNow()}</p>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
