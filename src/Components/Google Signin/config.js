// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKSENADRJbScBhkqtj0lafN6nVx5bXfVI",
  authDomain: "jesusisking-fb576.firebaseapp.com",
  databaseURL: "https://jesusisking-fb576-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jesusisking-fb576",
  storageBucket: "jesusisking-fb576.appspot.com",
  messagingSenderId: "402878700894",
  appId: "1:402878700894:web:dd7941f0b1b151a281c3cf",
  measurementId: "G-E027LNF97N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };