import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLgfv7xye9vGKOZcIQtk1ugnkI3kB-rbE",
    authDomain: "e-commerce-1dfb9.firebaseapp.com",
    databaseURL: "https://e-commerce-1dfb9.firebaseio.com",
    projectId: "e-commerce-1dfb9",
    storageBucket: "",
    messagingSenderId: "264149104932",
    appId: "1:264149104932:web:1568a89120f9480ef79bb1",
}  

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef =  firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
} 

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;