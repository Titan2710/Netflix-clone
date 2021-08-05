import Firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from "../seed";

const firebaseConfig = {
    apiKey: "AIzaSyCNTe2oYPBpjxqxeaATTaYEsFjKkpat_xA",
    authDomain: "netflix-myanmar.firebaseapp.com",
    projectId: "netflix-myanmar",
    storageBucket: "netflix-myanmar.appspot.com",
    messagingSenderId: "26478477413",
    appId: "1:26478477413:web:85b32ac905d1e6092dc68c"
  };

const firebase = Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };