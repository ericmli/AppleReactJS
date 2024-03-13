import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const GetFirebase = async (nameList: string) => {
  async function get() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collec = collection(db, nameList);
    const getCollec = await getDocs(collec);
    const list = getCollec.docs.map(doc => doc.data());

    return JSON.stringify(list);
  }

  try {
    return await get();
  } catch (error) {
    console.error('Erro ao obter dados do Firebase:', error);
    throw error;
  }
};