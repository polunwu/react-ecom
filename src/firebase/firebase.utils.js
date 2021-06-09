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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
