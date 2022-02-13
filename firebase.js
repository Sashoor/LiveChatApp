import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyC4gr3QoHDqxU9xgCTPAuc9fiM9uevWobE",
    authDomain: "livechatapp-ceb24.firebaseapp.com",
    projectId: "livechatapp-ceb24",
    storageBucket: "livechatapp-ceb24.appspot.com",
    messagingSenderId: "669505791031",
    appId: "1:669505791031:web:9a959446ea477d97b58bb2"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore();

  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, auth, provider };