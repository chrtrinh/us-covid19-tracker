import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAgPOke6JGaFvVYTJzD7JaYuGbnccPeJIw',
	authDomain: 'covid19-analytics-fc4f8.firebaseapp.com',
	databaseURL: 'https://covid19-analytics-fc4f8.firebaseio.com',
	projectId: 'covid19-analytics-fc4f8',
	storageBucket: 'covid19-analytics-fc4f8.appspot.com',
	messagingSenderId: '109116223226',
	appId: '1:109116223226:web:649d2a4d1e1a1d53e32343',
	measurementId: 'G-Y5X57558R5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
