import React from 'react';

const FollowButton = ({ isFollowing, onFollow, onUnfollow }) => {
  return (
    <button onClick={isFollowing ? onUnfollow : onFollow}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
