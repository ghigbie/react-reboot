import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB2yB8Ba-rHBOHrBid_0p5HJzfEj12OZx4",
    authDomain: "ecom-shop-6d712.firebaseapp.com",
    databaseURL: "https://ecom-shop-6d712.firebaseio.com",
    projectId: "ecom-shop-6d712",
    storageBucket: "",
    messagingSenderId: "354925328796",
    appId: "1:354925328796:web:bb60d03070cc6f8221b059"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;