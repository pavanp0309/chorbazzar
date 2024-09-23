// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth" // authentication -email/password ,google ,facebook
import { getFirestore } from "firebase/firestore"; // storing the Data [database]


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWeIue_nypCL7rU6o0mJJVJ6tx-yl5A1U",
  authDomain: "chorbazzar-97524.firebaseapp.com",
  projectId: "chorbazzar-97524",
  storageBucket: "chorbazzar-97524.appspot.com",
  messagingSenderId: "785923402785",
  appId: "1:785923402785:web:d6b9d6d629a7a9a3094760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);