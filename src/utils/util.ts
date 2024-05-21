import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-ep-YZqCxeedwLAbHWARStZ-zEuDkIQs",
  authDomain: "project-2ee76.firebaseapp.com",
  projectId: "project-2ee76",
  storageBucket: "project-2ee76.appspot.com",
  messagingSenderId: "56296469918",
  appId: "1:56296469918:web:66b94dde89290f257c528f",
  measurementId: "G-Y2Q126ZDM2"
};

export const GetFirebase = async (nameList: string, orderByField?: string) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const collec = collection(db, nameList);

  let q = orderByField ? query(collec, orderBy(orderByField)) : collection(db, nameList);

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

