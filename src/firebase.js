import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCNsGfI_AU__l1m8SJ4OGjk7L2_kbAmqtM",
  authDomain: "challenge-meetups.firebaseapp.com",
  projectId: "challenge-meetups",
  storageBucket: "challenge-meetups.appspot.com",
  messagingSenderId: "399982954976",
  appId: "1:399982954976:web:b3254bffd6293d35500385",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
