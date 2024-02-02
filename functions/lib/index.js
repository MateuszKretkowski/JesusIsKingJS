// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

const app = initializeApp({
    projectId: 'jesusisking-fb576',
    apiKey: 'AIzaSyCKSENADRJbScBhkqtj0lafN6nVx5bXfVI',
    authDomain: 'jesusisking-fb576.firebaseapp.com',
  });
  const functions = getFunctions(app);

const {onCall, HttpsError} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions/v2");

const addMessage = httpsCallable(functions, 'addMessage');
addMessage({ text: messageText })
  .then((result) => {
    // Read result of the Cloud Function.
    /** @type {any} */
    const data = result.data;
    const sanitizedMessage = data.text;
  });
