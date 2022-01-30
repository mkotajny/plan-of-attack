import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FirebaseResponseType } from './types';
import config from './config';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firebaseRequestsBody = (body: object) => {
  return Object.entries(body).reduce((o, key) => ({ ...o, [key[0]]: { stringValue: key[1] } }), {});
};

export const firebaseTransformResponse = (response: FirebaseResponseType) => {
  let filteredResponse: Record<string, unknown>[] = [];
  response.documents.forEach(document => {
    let eachDocument: Record<string, unknown> = {};
    Object.entries(document.fields).forEach(entry => {
      eachDocument[entry[0]] = entry[1]['stringValue'];
    });
    filteredResponse.push(eachDocument);
  });
  return filteredResponse;
};

export default firebase;
