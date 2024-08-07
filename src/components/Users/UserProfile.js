import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <img src={user.profilePicture} alt="Profile" />
    </div>
  );
};

export default UserProfile;
