const { db } = require('../config/firebaseConfig');
const { handleError } = require('../utils/errorHandling');

const getUserProfile = async (req, res) => {
  const { uid } = req.user;

  try {
    const userDoc = await db.collection('users').doc(uid).get();
    if (!userDoc.exists) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(userDoc.data());
  } catch (error) {
    handleError(res, error);
  }
};

const updateUserProfile = async (req, res) => {
  const { uid } = req.user;
  const { username, bio, profilePicture } = req.body;

  try {
    const userRef = db.collection('users').doc(uid);
    await userRef.update({ username, bio, profilePicture });
    res.status(200).json({ message: 'Profile updated' });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile
};
