import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBNE-ikrMuBjUZIFyR3pBCamXUS9DNH4Sc",
  authDomain: "verbi-pati-cfb34.firebaseapp.com",
  databaseURL: "https://verbi-pati-cfb34.firebaseio.com",
  projectId: "verbi-pati-cfb34",
  storageBucket: "verbi-pati-cfb34.appspot.com",
  messagingSenderId: "900827256057",
  appId: "1:900827256057:web:10b3f25845f6f5c4fefe28",
  measurementId: "G-TF30KMJH6B"
};

export default class Firebase {
  constructor() {
    app.initializeApp(config);

          this.auth = app.auth()
          this.database = app.firestore()
          this.storage =app.storage()
      }

  doSignInAsAdmin = (email, password, callback) => {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        callback({
          loginStatus: true,
          authType: "admin",
          message: "Logged in as admin"
        });
      })
      .catch(function(error) {
        var errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          callback({ loginStatus: false, message: "wrong-password" });
        } else if (errorCode === "auth/user-not-found") {
          callback({ loginStatus: false, message: "user-not-found" });
        }
      });
  };

  doSignInAsUser = (email, callback) => {
    this.database
      .collection("users")
      .where("email", "==", email)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          callback({
            loginStatus: true,
            authType: "user",
            message: "Logged as user",
            userData: doc.data()
          });
        });
      });
  };

  doAddDoc = (ref, doc) => {
    this.database
      .collection(ref)
      .add(doc)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  removeProvider = (ref, doc) => {
    this.database
      .collection(ref)
      .doc(doc)
      .delete()
      .then(function() {
        console.log("Document removed with ID: ");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };
}
