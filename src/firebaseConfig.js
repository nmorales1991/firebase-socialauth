import * as firebase from "firebase";
import "firebase/auth";
//import dataConfig from './dataConfig'

const app = firebase.initializeApp(
    {
        apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
        databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        projectId: "XXXXXXXXXXXXXXXX",
        storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXX",
        messagingSenderId: "XXXXXXXXXXXXXXXXXXXX",
        appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        measurementId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
);

/*const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();*/

export default app;