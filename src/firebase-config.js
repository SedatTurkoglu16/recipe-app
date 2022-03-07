import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9p8WTtc8LEHGdANJlU763bYYB-wjHfsQ",
  authDomain: "recipe-app-b6319.firebaseapp.com",
  projectId: "recipe-app-b6319",
  storageBucket: "recipe-app-b6319.appspot.com",
  messagingSenderId: "253176281643",
  appId: "1:253176281643:web:88eb9699842632fbcf486e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();