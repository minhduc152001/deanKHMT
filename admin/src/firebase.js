import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3LKoWxYx6H6TJqpNK8iJDEB5CPC2mE9M",
  authDomain: "netflix-92597.firebaseapp.com",
  projectId: "netflix-92597",
  storageBucket: "netflix-92597.appspot.com",
  messagingSenderId: "1071901437213",
  appId: "1:1071901437213:web:a37b5ef95eb76d86f545f4",
  measurementId: "G-SY44VSSR6P",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
