import firebase from "firebase";
  var config = {
    apiKey: "AIzaSyBciFjAjI5rf91p2jVRFdATFWNJj31p15I",
    authDomain: "pdfmycv-e12b5.firebaseapp.com",
    databaseURL: "https://pdfmycv-e12b5.firebaseio.com",
    projectId: "pdfmycv-e12b5",
    storageBucket: "pdfmycv-e12b5.appspot.com",
    messagingSenderId: "241390817212"
  };
 const fire= firebase.initializeApp(config);
 export default fire;