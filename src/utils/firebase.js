import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrV4epg6UJyH9_1L7lYALBfbBsGGPd8kA",
  authDomain: "testproject-86782.firebaseapp.com",
  databaseURL: "https://testproject-86782-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testproject-86782",
  storageBucket: "testproject-86782.appspot.com",
  messagingSenderId: "591812905226",
  appId: "1:591812905226:web:640dacd61ea1146eec92f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;