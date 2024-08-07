const { db } = require('../config/firebaseConfig');
const { handleError } = require('../utils/errorHandling');

const createPost = async (req, res) => {
  const { content } = req.body;
  const { uid } = req.user;

  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  try {
    const newPost = {
      content,
      authorId: uid,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: []
    };

    const docRef = await db.collection('posts').add(newPost);
    res.status(201).json({ message: 'Post created', postId: docRef.id });
  } catch (error) {
    handleError(res, error);
  }
};

const getPosts = async (req, res) => {
  try {
    const postsSnapshot = await db.collection('posts').orderBy('createdAt', 'desc').get();
    const posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(posts);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  createPost,
  getPosts
};
