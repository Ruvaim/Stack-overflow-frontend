import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFollower } from '../../actions/followers';
import headerLogo from '../../assets/icon.png';

const CommunityHeader = () => {
  var User = useSelector((state) => state.currentUserReducer);

  const followers = useSelector((state) => state.followersReducer);

  const dispatach = useDispatch();

  const handleFollow = (e) => {
    e.preventDefault();
    dispatach(addFollower('follow', User.result._id));
  };

  return (
    <div className="community-header-container">
      <div className="header-logo">
        <img src={headerLogo} alt="" />
      </div>
      <div className="header-section">
        <h1 className="community-heading">
          {followers.data === '' ||
          followers.data === undefined ||
          followers.data === null ? (
            <span>Stack Overflow Community</span>
          ) : (
            followers.data[0].title
          )}
        </h1>
        <div className="community-texts">
          <p>
            Followers:
            {followers.data === null || followers.data === '' ? (
              <span>Loading</span>
            ) : (
              followers.data[0].followers.length
            )}
          </p>
          <div>
            <button type="button" className="follow-btn" onClick={handleFollow}>
              {followers.data === null || followers.data === '' ? (
                <span>Loading</span>
              ) : followers.data[0].followers.findIndex(
                  (id) => id === String(User.result._id)
                ) === -1 ? (
                <>Follow</>
              ) : (
                <>Unfollow</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;
