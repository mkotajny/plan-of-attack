import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import config from './config';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firebaseRequestsBody = (body: object) => {
  return Object.entries(body).reduce((o, key) => ({ ...o, [key[0]]: { stringValue: key[1] } }), {});
};

export default firebase;
