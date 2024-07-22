import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCLdSjaZftR2PsBWgM5Yn7wRDKaWJIWcok",
  authDomain: "semana6-d2ffc.firebaseapp.com",
  projectId: "semana6-d2ffc",
  storageBucket: "semana6-d2ffc.appspot.com",
  messagingSenderId: "583022212745",
  appId: "1:583022212745:web:9521e8f1536295d5a8b858",
  measurementId: "G-JZMJ19D6B6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const db1 = getDatabase(app);
export const storage = getStorage(app);