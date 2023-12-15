import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCDO2uMxAep7pF13Z2J7lsNbtqVlsOsNbU",
  authDomain: "signup-survey-45cf7.firebaseapp.com",
  projectId: "signup-survey-45cf7",
  storageBucket: "signup-survey-45cf7.appspot.com",
  messagingSenderId: "1093760628212",
  appId: "1:1093760628212:web:b30a4dbb4b762190cab5a1",
  measurementId: "G-LVX1HL0MTD",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};
