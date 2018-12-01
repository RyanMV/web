import Firebase from "firebase";

let config = {
 /*   apiKey: "AIzaSyCfUPnp5BIx5s5noH4BmlgRuom2vXvlBUg",
    authDomain: "itlacrush-b47f4.firebaseapp.com",
    databaseURL: "https://itlacrush-b47f4.firebaseio.com",
    projectId: "itlacrush-b47f4",
    storageBucket: "itlacrush-b47f4.appspot.com",
    messagingSenderId: "597403593704"
    */
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

