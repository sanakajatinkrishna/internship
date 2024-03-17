// firebase.js
import {initializeApp} from '@firebase/app';
import {signInWithEmailAndPassword, getAuth} from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCCmFwSQASCcwG9FqHttB-WdtHFPhQMvdU',
  authDomain: 'internsh-13824.firebaseapp.com',
  projectId: 'internsh-13824',
  storageBucket: 'internsh-13824.appspot.com',
  messagingSenderId: '835862706653',
  appId: '1:835862706653:web:7a44647e73d02cf5661e34',
  measurementId: 'G-LG07PSPRT8',
};

const firebaseApp = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(firebaseApp);

export {auth};
