import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyD2v9-lbKTdGL6-jNQ4tlhtbDfoxF3nKt0",
    authDomain: "chatwithvue-c08a5.firebaseapp.com",
    projectId: "chatwithvue-c08a5",
    storageBucket: "chatwithvue-c08a5.appspot.com",
    messagingSenderId: "719747868552",
    appId: "1:719747868552:web:a316a373c98d6b6d157c3d"
}

const app = initializeApp(config);
const db = getFirestore(app);
export{ 
    db
};