
/*
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD71YVaeQ_3bpNVG8oyi3mamJsiHSPJbcs",
  authDomain: "oderscake.firebaseapp.com",
  databaseURL: "https://oderscake.firebaseio.com",
  projectId: "oderscake",
  storageBucket: "oderscake.appspot.com",
  messagingSenderId: "805677252588",
  appId: "1:805677252588:web:bcde474582362a79060ac9",
  measurementId: "G-3YP0C9JMGX"
};
  // Initialize Firebase    firebase.analytics();

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //export var data = firebase.initializeApp(firebaseConfig);
  export var data = firebase.database().ref('user1');
  data.once('value').then(function(snapshot){
    console.log(snapshot.val());
  }) 

*/

import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBoISNxmqWtYEWUXwhHjuvzNByTF4n72TU",
    authDomain: "datamanager-b8117.firebaseapp.com",
    databaseURL: "https://datamanager-b8117.firebaseio.com",
    projectId: "datamanager-b8117",
    storageBucket: "datamanager-b8117.appspot.com",
    messagingSenderId: "106613585909",
    appId: "1:106613585909:web:4685ae12d9f74d17a412bc",
    measurementId: "G-QWM58BRXLH"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const data = firebase.database().ref('oderInfo');
  //export const dulieu = firebase.initializeApp(firebaseConfig);;
