import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const createUserWithDocument = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  const createdAt = new Date();

  const { displayName, email } = userAuth;

  if (!userSnapShot.exists()) {
    console.log("hey");
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log(`something went wrong, ${err}`);
    }
  }

  return userDocRef;
};

export const onAuthUserStateChange = (callbackfn) => {
  onAuthStateChanged(auth, callbackfn);
};

export const signOutUserAuth = async () => signOut(auth);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectRef = await collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const { title } = obj;
    const docRef = doc(collectRef, title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
  //  console.log(done)
};

export const getCatogriesandDocuments = async () => {
  const collectionRef = collection(db, "catogories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const catogoryMap = querySnapShot.docs.map((snapShot) => snapShot.data());
  return catogoryMap;
};
