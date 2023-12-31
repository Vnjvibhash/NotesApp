import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC58xfgsangXAwCuy3-dYY4rbkFKoGJ59o",
    authDomain: "notesapp-2c179.firebaseapp.com",
    projectId: "notesapp-2c179",
    storageBucket: "notesapp-2c179.appspot.com",
    messagingSenderId: "13181444884",
    appId: "1:13181444884:web:5bd6d93bc1ab8622b15801",
    measurementId: "G-465B1N38ZR"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };