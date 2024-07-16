import { useState, useEffect } from 'react';
import { getFirestore, collection, query, getDocs, orderBy } from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './apiKeyFirebase';

export const GetFirebase = async (nameList: string, orderByField?: string) => {
  // Get API Key in site firestore
  // export const firebaseConfig = {apiKey: "",authDomain: "",projectId: "",storageBucket: "",messagingSenderId: "",appId: "",measurementId: ""};
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const collec = collection(db, nameList);

  const q = orderByField ? query(collec, orderBy(orderByField)) : collection(db, nameList);

  const getCollec = await getDocs(q);
  const list = getCollec.docs.map(doc => doc.data());
  
  return JSON.stringify(list);
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return screenSize;
};

