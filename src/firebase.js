import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onValue} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAVfb6VdgtxXOzbBiCS8__K5LCcfPBHie0",
  authDomain: "chat-a7481.firebaseapp.com",
  databaseURL: "https://chat-a7481-default-rtdb.firebaseio.com",
  projectId: "chat-a7481",
  storageBucket: "chat-a7481.appspot.com",
  messagingSenderId: "761415931106",
  appId: "1:761415931106:web:e21f265088960062fbfabb",
  measurementId: "G-8840F5H0MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)

export { db, ref, push, onValue} ;