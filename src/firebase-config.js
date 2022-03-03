import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC6CD-clPu4w-_Ktw0Z102B5Rrkyv1sgr4",
  authDomain: "recipe-app-b074b.firebaseapp.com",
  projectId: "recipe-app-b074b",
  storageBucket: "recipe-app-b074b.appspot.com",
  messagingSenderId: "536200006043",
  appId: "1:536200006043:web:70add553897d13bc26b93e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();