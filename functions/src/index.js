const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { createPost, getPosts } = require('./controllers/postController');
const { getUserProfile, updateUserProfile } = require('./controllers/userController');
const authenticate = require('./middleware/authMiddleware');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.post('/posts', authenticate, createPost);
app.get('/posts', getPosts);
app.get('/profile', authenticate, getUserProfile);
app.put('/profile', authenticate, updateUserProfile);

exports.api = functions.https.onRequest(app);
