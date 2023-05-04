import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA-hZ-bcQVhmXw1MWOZIgmDUTW9HPhHp4Y",
    authDomain: "teamvoting-b6382.firebaseapp.com",
    databaseURL: "https://teamvoting-b6382-default-rtdb.firebaseio.com",
    projectId: "teamvoting-b6382",
    storageBucket: "teamvoting-b6382.appspot.com",
    messagingSenderId: "809737368856",
    appId: "1:809737368856:web:b334984da2dd25fd521a6d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();