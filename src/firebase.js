import * as firebase from "firebase/app";
import "firebase/firestore";
import "firbase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-ea9YvbK9CXnvETQ2Gkn1hLzpPjFukuc",
  authDomain: "homepage-2f334.firebaseapp.com",
  databaseURL: "https://homepage-2f334.firebaseio.com",
  projectId: "homepage-2f334",
  storageBucket: "",
  messagingSenderId: "207824860850",
  appId: "1:207824860850:web:c555d77fd76c9edd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
