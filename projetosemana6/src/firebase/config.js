// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);