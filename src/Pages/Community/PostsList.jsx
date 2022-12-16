import React from 'react';
import Posts from './Posts';

const PostsList = ({ postsList }) => {
  return (
    <>
      {postsList.map((Post) => (
        <Posts Post={Post} key={Post.id} />
      ))}
    </>
  );
};

export default PostsList;
