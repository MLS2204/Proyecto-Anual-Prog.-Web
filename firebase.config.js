import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuBCVQyn3w_VrKnfIteuk_AwwLQXPqWhI",
  authDomain: "developers-e3595.firebaseapp.com",
  databaseURL: "https://developers-e3595-default-rtdb.firebaseio.com",
  projectId: "developers-e3595",
  storageBucket: "developers-e3595.appspot.com",
  messagingSenderId: "267490011169",
  appId: "1:267490011169:web:114b6716ae0fe476259b60",
  measurementId: "G-SJ0VR23DRB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);