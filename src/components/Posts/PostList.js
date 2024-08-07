import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import PostItem from './PostItem';

const PostList = () => {
  const posts = useFirestore('posts');

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
