import React from 'react';
import useAuth from '../hooks/useAuth';
import UserProfile from '../components/Users/UserProfile';

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <UserProfile user={currentUser} />
    </div>
  );
};

export default Profile;
