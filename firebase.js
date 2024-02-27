import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpq5oUP1oWpjghT9vgWcGXNV_y-IhysZc",
  authDomain: "my-app-b3829.firebaseapp.com",
  projectId: "my-app-b3829",
  storageBucket: "my-app-b3829.appspot.com",
  messagingSenderId: "550250138774",
  appId: "1:550250138774:web:be851aa2cccdcf1e88c6b7",
  measurementId: "G-KWQBC4Y26C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
