import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const CreatePost = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim()) {
      await addDoc(collection(db, 'posts'), {
        content,
        authorId: 'user123',
        createdAt: new Date(),
        likes: 0,
        comments: []
      });
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
