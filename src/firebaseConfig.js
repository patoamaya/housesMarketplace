import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBY-ap04myU6MuoW-MvV5Wxjj03ONztTDA",
  authDomain: "dulce-hogar-bba7f.firebaseapp.com",
  projectId: "dulce-hogar-bba7f",
  storageBucket: "dulce-hogar-bba7f.appspot.com",
  messagingSenderId: "624263169830",
  appId: "1:624263169830:web:27e90abfdc3f334609e3e7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)