import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_jxAPy5m7tIECoMLCRA8mw7QA4doRwrk",
  authDomain: "ecommerce-relojes.firebaseapp.com",
  projectId: "ecommerce-relojes",
  storageBucket: "ecommerce-relojes.appspot.com",
  messagingSenderId: "96185084273",
  appId: "1:96185084273:web:66b2c671c9057b61a1aed0"
};


const app = initializeApp(firebaseConfig);


export const initFirebase = () =>  app