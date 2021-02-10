import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt7IYkdTIhk6cniHNkS2Mr3hlw8S4dTec",
  authDomain: "facebook-clone-651bd.firebaseapp.com",
  projectId: "facebook-clone-651bd",
  storageBucket: "facebook-clone-651bd.appspot.com",
  messagingSenderId: "810751580722",
  appId: "1:810751580722:web:37412439e8e6b041107a2b",
  measurementId: "G-5BW08HSS8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
