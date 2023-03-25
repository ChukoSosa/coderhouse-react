import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-Vpaz84Tq6oQ2uFCIJQ4fwbmNijjCao0",
  authDomain: "coder-house-app.firebaseapp.com",
  projectId: "coder-house-app",
  storageBucket: "coder-house-app.appspot.com",
  messagingSenderId: "571083864527",
  appId: "1:571083864527:web:0595ecf957c389e9837aba"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app