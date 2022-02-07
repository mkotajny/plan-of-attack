import firebase from 'firebase';
import 'firebase';
import 'firebase/firestore';
import { FirebaseFetchResponseType } from './types';
import config from './config';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firebaseRequestsBody = (body: object) => {
  const filteredBody = Object.entries(body).reduce(
    (o, key) => (key[1] ? { ...o, [key[0]]: { stringValue: key[1] } } : {}),
    {}
  );
  return filteredBody;
};

export const firebaseGetDocumentId = (nameField: string) => {
  const slashedParts = nameField.split('/');
  return slashedParts[slashedParts.length - 1];
};

export const firebaseResponseTransform = (response: FirebaseFetchResponseType) => {
  let filteredResponse: Record<string, unknown>[] = [];
  response.documents.forEach(document => {
    let eachDocument: Record<string, unknown> = {};
    Object.entries(document.fields).forEach(entry => {
      eachDocument[entry[0]] = entry[1]['stringValue'];
    });
    filteredResponse.push({ id: firebaseGetDocumentId(document.name), document: eachDocument });
  });
  return filteredResponse;
};

export default firebase;
