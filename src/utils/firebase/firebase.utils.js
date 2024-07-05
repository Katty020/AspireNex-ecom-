import { initializeApp } from 'firebase/app';
import { getAuth, signOut,onAuthStateChanged,signInWithRedirect, signInWithPopup, GoogleAuthProvider ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore,query,collection, writeBatch,getDocs ,doc, getDoc, setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZkS9p2EBkVq00o6Ui0D2QHJKtJvqvE8c",
  authDomain: "crwn-clothing-db-7f8a6.firebaseapp.com",
  projectId: "crwn-clothing-db-7f8a6",
  storageBucket: "crwn-clothing-db-7f8a6.appspot.com",
  messagingSenderId: "345731536301",
  appId: "1:345731536301:web:0b9b0c3d93242525fefd24"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments =async()=>{
  const collectionRef =collection (db, 'categories')
  const q = query(collectionRef)
  const querySnapshot =await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth ,additionalInformation={displayName:'Mike'}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword= async(email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)
};
export const signInAuthWithEmailAndPassword= async(email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)
}
export const signOutUser=async()=>await signOut(auth)

export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback)

