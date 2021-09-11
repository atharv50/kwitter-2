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
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name;
function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
     }); });
    }
    getData() ; 
     function redirectToRoomName(name)
     {
     console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
     }
     function logout(){
       localStorage.removeItem ("user_name");
       localStorage.removeItem ("room_name");
       window.location = "login.html";
     }