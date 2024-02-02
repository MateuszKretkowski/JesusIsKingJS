import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Młynek!");
});  // Added semicolon here

// Make sure there is a newline at the end of the file
