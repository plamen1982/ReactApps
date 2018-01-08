const admin = require('firebase-admin')
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service-account.json');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createUser = functions.https.onRequest(createUser)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-34c1f.firebaseio.com"
  });