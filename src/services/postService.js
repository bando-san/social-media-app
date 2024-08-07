import { db } from '../firebaseConfig';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export const addPost = (post) => {
  return addDoc(collection(db, 'posts'), post);
};

export const updatePost = (postId, updatedContent) => {
  const postRef = doc(db, 'posts', postId);
  return updateDoc(postRef, updatedContent);
};

export const deletePost = (postId) => {
  const postRef = doc(db, 'posts', postId);
  return deleteDoc(postRef);
};
