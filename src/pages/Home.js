import React from 'react';
import PostList from '../components/Posts/PostList';
import CreatePost from '../components/Posts/CreatePost';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <CreatePost />
      <PostList />
    </div>
  );
};

export default Home;
