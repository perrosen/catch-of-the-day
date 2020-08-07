import "firebase/database";

import firebase from "firebase/app";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAG7F8TCfACySQRgXxGJaqYaOc8jHV7YcY",
  authDomain: "catch-of-the-day-perry-cab62.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-perry-cab62.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// This is default export
export default base;
