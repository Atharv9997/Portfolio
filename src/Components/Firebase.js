import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCY_Z2l0z1bzWc_s2MFfABPq7DsNYqC17k",
    authDomain: "space-app-portfolio.firebaseapp.com",
    projectId: "space-app-portfolio",
    storageBucket: "space-app-portfolio.appspot.com",
    messagingSenderId: "412868221012",
    appId: "1:412868221012:web:97b60c55bdcb13cd83b5c1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);