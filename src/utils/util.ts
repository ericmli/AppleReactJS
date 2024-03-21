import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export const firebaseConfig = {
  apiKey: "AIzaSyC-ep-YZqCxeedwLAbHWARStZ-zEuDkIQs",
  authDomain: "project-2ee76.firebaseapp.com",
  projectId: "project-2ee76",
  storageBucket: "project-2ee76.appspot.com",
  messagingSenderId: "56296469918",
  appId: "1:56296469918:web:66b94dde89290f257c528f",
  measurementId: "G-Y2Q126ZDM2"
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