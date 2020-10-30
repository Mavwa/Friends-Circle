function adduser(){
    username = document.getElementById("username").value
    localStorage.setItem("username", username)
    firebase.database().ref("/").child(username).update({
        user: "successfully added user"
    })

}


var firebaseConfig = {
    apiKey: "AIzaSyBAP4C_dmhlTGUOjMU5rgmu6aPhmONZSTo",
    authDomain: "friends-circle-c7c34.firebaseapp.com",
    databaseURL: "https://friends-circle-c7c34.firebaseio.com",
    projectId: "friends-circle-c7c34",
    storageBucket: "friends-circle-c7c34.appspot.com",
    messagingSenderId: "605754138802",
    appId: "1:605754138802:web:ac6de3931bd67ee87669ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
