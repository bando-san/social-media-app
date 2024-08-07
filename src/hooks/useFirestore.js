import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot /*, getDocs */ } from 'firebase/firestore'; // Commenting out the unused import
import { db } from '../firebaseConfig';

const useFirestore = (collectionName, conditions = []) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let q = query(collection(db, collectionName));
    if (conditions.length > 0) {
      conditions.forEach((condition) => {
        q = query(q, where(...condition));
      });
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDocuments(docs);
    });

    return () => unsubscribe();
  }, [collectionName, conditions]);

  return documents;
};

export default useFirestore;
