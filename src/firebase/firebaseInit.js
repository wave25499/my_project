import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAZF3r9jybKxZCt0WEq-GnrCYGvgDROG2w",
    authDomain: "project-edec9.firebaseapp.com",
    projectId: "project-edec9",
    storageBucket: "project-edec9.appspot.com",
    messagingSenderId: "624937491519",
    appId: "1:624937491519:web:1122339497f961213d2c8a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();