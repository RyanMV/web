import Firebase from "firebase"

let config = {
   apiKey: "AIzaSyBtg5xeO5pS_rFIDYhywKh7uu6gognyeYA",
   authDomain: "itlacrush-d4d9a.firebaseapp.com",
   databaseURL: "https://itlacrush-d4d9a.firebaseio.com",
   projectId: "itlacrush-d4d9a",
   storageBucket: "itlacrush-d4d9a.appspot.com",
   messagingSenderId: "334640658701"
};

let app = Firebase.initializeApp(config);

export default {
    database: app.database()
};

