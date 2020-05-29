import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDopxEDZrUALW30MvoZy2yrVLR_fxrEfVA",
    authDomain: "autopark-ebdc4.firebaseapp.com",
    databaseURL: "https://autopark-ebdc4.firebaseio.com",
    projectId: "autopark-ebdc4",
    storageBucket: "autopark-ebdc4.appspot.com",
    messagingSenderId: "891301380981",
    appId: "1:891301380981:web:6d9ef5a90555f73aa6493c"
};

if (!firebase.apps.length) {//Evita o erro de inicialização do firebase, verficando se ele já foi iniciado
    firebase.initializeApp(firebaseConfig);
}

export default firebase;