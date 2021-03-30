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
    console.log(newSuggestion);
    const increment = firebase.firestore.FieldValue.increment(1);
    // const suggestRef = this.db.collection('suggestions').add(newSuggestion).catch(function (e) {
    //   console.error('Error adding suggestion: ', e);
    // });
    const statsRef = this.db.collection('suggestions').doc('stats');
    const newSuggestId = (statsRef.totalNumber || "1").toString();
    const suggestRef = this.db.collection('suggestions').doc(newSuggestId);
    const batch = this.db.batch();
    batch.set(suggestRef, newSuggestion, { merge: true });
    batch.set(statsRef, { totalNumber: increment }, { merge: true });
    batch.commit();

  }

  getAll = async () => {
    let results = [];
    const snapshots = await this.db.collection('suggestions').get();
    snapshots.forEach(entry => {
      results.push(entry.data())
    })
    console.log('GET ALL: ', results);
    return results;
  }

  getDetail = async (entryID) => {
    let result = (await this.db.collection('suggestions').doc(entryID).get()).data();
    console.log('GET ONE: ', result);
    return result;
  }
}
export default Firebase;