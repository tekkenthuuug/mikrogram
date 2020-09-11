import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBrT9qj_Sx3TySSSVkd6wSMD_hPCth9yu8',
  authDomain: 'mikrogram-22505.firebaseapp.com',
  databaseURL: 'https://mikrogram-22505.firebaseio.com',
  projectId: 'mikrogram-22505',
  storageBucket: 'mikrogram-22505.appspot.com',
  messagingSenderId: '176923551427',
  appId: '1:176923551427:web:b8eb1e08151b85d091a476',
  measurementId: 'G-ZEECNNM0J9',
} as const;

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
