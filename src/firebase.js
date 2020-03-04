import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyD6TjEgEdx_4EY9IyaHAE4z8pz-5NkS6kQ",
    authDomain: "pizza-planet-aa06b.firebaseapp.com",
    databaseURL: "https://pizza-planet-aa06b.firebaseio.com",
    projectId: "pizza-planet-aa06b",
    storageBucket: "pizza-planet-aa06b.appspot.com",
    messagingSenderId: "616339781415",
    appId: "1:616339781415:web:7e410949fc775415e71b02"

}
firebase.initializeApp(config);
const db = firebase.firestore()

export const firebaseAuth = firebase.auth()
export const dbMenuRef = db.collection('menu')
export const dbOrdersRef = db.collection('orders')