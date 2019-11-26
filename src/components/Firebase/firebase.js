import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

var config = {
    apiKey: "AIzaSyCfzeN7dLj7M6YzYLF07QTWtC0SX2zIVoI",
    authDomain: "batdent-6d37c.firebaseapp.com",
    databaseURL: "https://batdent-6d37c.firebaseio.com",
    projectId: "batdent-6d37c",
    storageBucket: "batdent-6d37c.appspot.com",
    messagingSenderId: "470553160412",
    appId: "1:470553160412:web:e575c7cc9f72388a912219",
    measurementId: "G-G8NJPPPTCB"
  };

  export default class Firebase {
      constructor() {
          app.initializeApp(config)

          this.auth = app.auth()
          this.database = app.firestore()
      }

      doAddDoc = (ref, doc) => {
        this.database.collection(ref).add(doc)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
        
  }