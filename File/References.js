import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBGiXyVHQriLfoaj2B9vUl15Xio2RBVC7Y',
  authDomain: 'uas2022-57f06.firebaseapp.com',
  databaseURL: 'https://uas2022-57f06-default-rtdb.firebaseio.com',
  projectId: 'uas2022-57f06',
  storageBucket: 'uas2022-57f06.appspot.com',
  messagingSenderId: '1076010926500',
  appId: '1:1076010926500:web:2f1545070065dd4b9ec131',
};
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

  const dataRef = firebase.database().ref();
  const auth = firebase.auth();
 
  export {dataRef, auth};