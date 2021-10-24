import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// Config
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_APP_ID,
};

const firebase = Firebase.initializeApp(config);

// Seed the database - BEWARE - this only has to happen once!
// Once you initialize the app the database will be seeded and this line will need to be commented out to prevent duplication whenever the app is altered / started

// seedDatabase(firebase);

export { firebase };
