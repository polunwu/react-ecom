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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
