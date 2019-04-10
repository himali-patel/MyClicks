import firebase from "firebase";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyBCYDrbQdlA6c2f0qBOFA6uOPrf9d_3E8Y",
    authDomain: "gatsby-click.firebaseapp.com",
    databaseURL: "https://gatsby-click.firebaseio.com",
    projectId: "gatsby-click",
    storageBucket: "gatsby-click.appspot.com",
    messagingSenderId: "680213891435"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const storage = firebase.storage();

export { storage };