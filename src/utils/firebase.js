import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxGCu_6XPpPBSFsXX8uKSa1ZMapHeu-QA",
  authDomain: "mytodoapp-9aca9.firebaseapp.com",
  databaseURL: "https://mytodoapp-9aca9.firebaseio.com",
  projectId: "mytodoapp-9aca9",
  storageBucket: "",
  messagingSenderId: "961158885108",
  appId: "1:961158885108:web:d543ff83f5ad5e63"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
