import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

firebase.initializeApp(firebaseConfig);

class Firebase {
db = firebase.firestore();

addSuggestion(newSuggestion) {
  this.db.collection('suggestions').add(newSuggestion).catch(function(e) {
    console.error('Error adding suggestion: ', e);
  })
}

getSuggestions() {
  let results = [];
  this.db.collection('suggestions').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      results.push(doc);
    })
  })
  console.log(results);
  // return results;
  // return [...querySnapshot]
}
// db.collection("suggestions").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });
}

export default Firebase;