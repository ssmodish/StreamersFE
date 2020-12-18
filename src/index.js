import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

const firebaseConfig = {
  apiKey: "AIzaSyDZzAHqzO7ojR2PTl1Hfm7MjTFN-n-xqdk",
  authDomain: "streamselector-6821f.firebaseapp.com",
  databaseURL: "https://streamselector-6821f.firebaseio.com",
  projectId: "streamselector-6821f",
  storageBucket: "streamselector-6821f.appspot.com",
  messagingSenderId: "288771425653",
  appId: "1:288771425653:web:0409be261489b4c12fff3c",
  measurementId: "G-MSQBY43V2M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
