import React from 'react';
import './Community.css';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import { Link } from 'react-router-dom';
import PostsList from './PostsList';
import CommunityHeader from './CommunityHeader';
import { useSelector } from 'react-redux';

const Community = () => {
  const postsList = useSelector((state) => state.communityReducer);
  var User = useSelector((state) => state.currentUserReducer);

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <div className="community-container">
          <CommunityHeader />

          <div className="all-posts">
            <div className="post-content">
              <h2>ALL POSTS</h2>
              <Link
                type="button"
                to="/Community/postQuery"
                className="create-post-btn"
              >
                Create Post
              </Link>
            </div>
            <div>
              {User === null ? (
                <h1>Login First</h1>
              ) : postsList === null ? (
                <h1>Loading...</h1>
              ) : postsList.data === null ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <PostsList postsList={postsList.data} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
