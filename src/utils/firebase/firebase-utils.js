import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiGNoVpq5bkg8yHrHTTBi0_8BBfentr4M",
  authDomain: "crown-store-84ef6.firebaseapp.com",
  projectId: "crown-store-84ef6",
  storageBucket: "crown-store-84ef6.appspot.com",
  messagingSenderId: "505838591195",
  appId: "1:505838591195:web:6fdfb660b8fabaa3d000fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

export const googleSignInPopUp = async () =>
  await signInWithPopup(auth, googleProvider);

export const signInUserWithEmailAndPassword = async () =>
  await signInWithEmailAndPassword(auth, googleProvider);

export const createUserWithDocument = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  const createdAt = new Date();

  const { displayName, email } = userAuth;

  if (!userSnapShot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(`something went wrong, ${err}`);
    }
  }

  return userDocRef;
};
