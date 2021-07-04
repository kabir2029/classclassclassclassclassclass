var firebaseConfig = {
    apiKey: "AIzaSyDTgGWE7FQZBLthl0OpklDD2VIzNhyqd5M",
    authDomain: "twitter-my-face.firebaseapp.com",
    databaseURL: "https://twitter-my-face-default-rtdb.firebaseio.com",
    projectId: "twitter-my-face",
    storageBucket: "twitter-my-face.appspot.com",
    messagingSenderId: "486621165106",
    appId: "1:486621165106:web:7a4537e132f85d4fc42e2b",
    measurementId: "G-NF05GW0C4C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      })
  }