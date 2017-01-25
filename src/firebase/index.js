import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvTwVfKNkDj0Gl7Vs0X_YwUygtakWu0rs",
    authDomain: "coffee-log.firebaseapp.com",
    databaseURL: "https://coffee-log.firebaseio.com/",
    storageBucket: "coffee-log.appspot.com"
}

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

export {
    auth,
    db
};