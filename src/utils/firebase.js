import firebase from "firebase/app";
import { useSelector } from "react-redux";
import {websettingsData } from "../store/reducers/webSettings";
require("firebase/auth");
require("firebase/firestore");

const FirebaseData = () => {

    const websettingsdata = useSelector(websettingsData);

    const apiKeyData = websettingsdata && websettingsdata.firebase_api_key;
    const authDomainData = websettingsdata && websettingsdata.firebase_auth_domain;
    const databaseURLData = websettingsdata && websettingsdata.firebase_database_url;
    const projectIdData = websettingsdata && websettingsdata.firebase_project_id;
    const storageBucketData = websettingsdata && websettingsdata.firebase_storage_bucket;
    const messagingSenderIdData = websettingsdata && websettingsdata.firebase_messager_sender_id;
    const appIdData = websettingsdata && websettingsdata.firebase_app_id;
    const measurementIdData = websettingsdata && websettingsdata.firebase_measurement_id;

    let firebaseConfig = {
        apiKey: "AIzaSyC7Die3yOQ7QJQmfARyYjunj2jafUMgoLo",
        authDomain: "quiz-app-3461e.firebaseapp.com",
        projectId: "quiz-app-3461e",
        storageBucket: "quiz-app-3461e.appspot.com",
        messagingSenderId: "272221041540",
        appId: "1:272221041540:web:06c457c79d2870892ba3d1"
      }

    // eslint-disable-next-line
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const auth = firebase.auth();

    const db = firebase.firestore();

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const facebookprovider = new firebase.auth.FacebookAuthProvider();

    return ({ auth, googleProvider, facebookprovider, firebase, db });

}

export default FirebaseData;
