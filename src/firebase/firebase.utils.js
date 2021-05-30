import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC5FXjiQ6vghSxKvbAK7-kwo74GWFErigg',
  authDomain: 'react-ecom-10a76.firebaseapp.com',
  projectId: 'react-ecom-10a76',
  storageBucket: 'react-ecom-10a76.appspot.com',
  messagingSenderId: '791343677060',
  appId: '1:791343677060:web:f4641ba866df98cbd80cd1',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // 沒有使用者資料

  const userRef = firestore.doc(`users/${userAuth.uid}`); // get documentRef

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // database 尚未儲存該使用者資料
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // 生成時間

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user');
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
