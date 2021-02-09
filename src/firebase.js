import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtEPf2RkG55JWjc2ObPJkvbN-KNUimTFo",
    authDomain: "wecan-foundation.firebaseapp.com",
    projectId: "wecan-foundation",
    storageBucket: "wecan-foundation.appspot.com",
    messagingSenderId: "1032145689923",
    appId: "1:1032145689923:web:e1ebe5603858200656e3f6",
    measurementId: "G-CJGWR9B6YP"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();