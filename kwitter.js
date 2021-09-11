var firebaseConfig = {
    apiKey: "AIzaSyC9qb-aqMnikFsHXUWa6TS7T7DlKFFGZcc",
    authDomain: "kwiter-b9d55.firebaseapp.com",
    databaseURL: "https://kwiter-b9d55-default-rtdb.firebaseio.com",
    projectId: "kwiter-b9d55",
    storageBucket: "kwiter-b9d55.appspot.com",
    messagingSenderId: "250181191211",
    appId: "1:250181191211:web:f1d6a536d5738c0e900c6e",
    measurementId: "G-KVF5J2GRV5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
  user_name =document.getElementById("user_name").value;
  localStorage.setItem("user_name",user_name);
  window.location = "room.html" 

  }