import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCW5HfmF0jjBnQV7e1fwnkFmjSreCMyp9Y",
    authDomain: "login-28989.firebaseapp.com",
    databaseURL: "https://login-28989.firebaseio.com",
    projectId: "login-28989",
    storageBucket: "login-28989.appspot.com",
    messagingSenderId: "837139865158",
    appId: "1:837139865158:web:66ff2035367958fd7fb447",
    measurementId: "G-5SV8PW8604"
});

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export  {app, googleAuthProvider, facebookAuthProvider, githubAuthProvider};