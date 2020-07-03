const firebase = require("firebase-admin");

// Best practice: Get the credential file and db url from environment varible
const serviceAccount = require("<path-to-service-account-credential.json>");
const dbUrl = "https://<Your DB>.firebaseio.com"; //You’ll get the DB Url from Firebase Console

exports.initializeFirebaseMessaging = () => {
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: dbUrl,
  });
  console.info("Initialized Firebase SDK");
};
