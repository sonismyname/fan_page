import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCwgHV_rN2u5oO9CxvzQkDxa_RmHdbLTKw",
  authDomain: "chat-app-bc9b7.firebaseapp.com",
  projectId: "chat-app-bc9b7",
  storageBucket: "chat-app-bc9b7.appspot.com",
  messagingSenderId: "1056725411840",
  appId: "1:1056725411840:web:02b7982bcd7e36444990e5",
  measurementId: "G-YG0C7BQ4G1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue };
