import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9JzJJ3AmQFRep4FPgyAyuI2hGmWTWaDc",
    authDomain: "oyabypinkypromise.firebaseapp.com",
    projectId: "oyabypinkypromise",
    storageBucket: "oyabypinkypromise.appspot.com",
    appId: "1:128123671252:android:2875ade3df0eb61049a141"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);