import * as firebase from 'firebase'
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey : "AIzaSyAYfgsaIOIV_SImguOnAbR_8m1fzVRBuzY",
    authDomain: "wily-app-1e175.firebaseapp.com",
    projectId: "wily-app-1e175",
    storageBucket: "wily-app-1e175.appspot.com",
    messagingSenderId: "338256131717",
    appId: "1:338256131717:web:9c9005f2413d91e2f01bec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()