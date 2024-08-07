import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div>
      <h3>{post.content}</h3>
      <p>Author: {post.authorId}</p>
      <p>Likes: {post.likes}</p>
    </div>
  );
};

export default PostItem;
