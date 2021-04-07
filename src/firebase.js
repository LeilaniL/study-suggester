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

  async addSuggestion(newSuggestion) {
    const increment = firebase.firestore.FieldValue.increment(1);
    const collectRef = this.db.collection('suggestions');
    const docRef = collectRef.doc('stats');
    try {
      await this.db.runTransaction(async (t) => {
        const res = await this.db.collection('suggestions').add(newSuggestion);
        const newRef = this.db.collection('suggestions').doc(res.id);
        const countRef = await t.get(docRef);
        const newCount = parseInt(countRef.get('totalNumber')) + 1;
        t.update(docRef, { totalNumber: increment });
        t.update(newRef, { countId: newCount });
      })
    } catch (e) {
      console.error('Transaction error:', e);
    }
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