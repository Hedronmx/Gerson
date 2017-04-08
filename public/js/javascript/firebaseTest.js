var defaultapp;

function fbInit(){
  var config = {
    apiKey: "AIzaSyDIJWhCiIvg_5h1VIlE67hWokd4GRXjsR4",
    authDomain: "test-project-be0b7.firebaseapp.com",
    databaseURL: "https://test-project-be0b7.firebaseio.com",
    projectId: "test-project-be0b7",
    storageBucket: "test-project-be0b7.appspot.com",
    messagingSenderId: "636713466479"
  };
  defaultapp = firebase.initializeApp(config);
}

function fbAuth(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result){
    var token = result.credential.accessToken;
  });
}

function fbSignOut(){
  firebase.auth().signOut().then(function() {
  window.alert("sign out successfull");
}).catch(function(error) {
  window.alter(error);
  console.log(error);
});
}

function fbDBWrite(){
  var database = defaultapp.database();
  var user = defaultapp.auth().currentUser;

  if(user){
    console.log("user is logged in");
  }
  else{
    console.log("not logged in");
  }

  var name = $('#name').val();
  var email = $('#email').val();
  var userId = user.uid;

  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
  });
}

function fbDBRead(){
  var userId = firebase.auth().currentUser.uid;

  firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var username = snapshot.val().username;
    var email = snapshot.val().email;
    $('#userName').text(username);
    $('#userEmail').text(email);
  });
}
/*<!-- <html>
  <head>
    <meta charset="utf-8">
    <title>Welcome to Firebase Hosting</title>
    <style media="screen">
      body {
        font-family: Roboto, Arial, sans-serif;
        background: #ECEFF1;
        color: rgba(0,0,0,0.87);
      }

      a {
        color: rgb(3,155,229);
      }

      #message {
        max-width: 400px;
        margin: 40px auto;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12);
        border-radius: 2px;
        background: white;
        padding: 16px 24px;
      }

      #message h1 {
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        margin: 0 0 16px;
      }

      #message p {
        font-weight: 300;
        line-height: 150%;
      }

      #message ul {
        list-style: none;
        margin: 16px 0 0;
        padding: 0;
        text-align: center;
      }

      #message li a {
        display: inline-block;
        padding: 8px;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 500;
        background: rgb(3,155,229);
        color: white;
        border: 1px solid rgb(3,155,229);
        border-radius: 3px;
        font-size: 14px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
      }
    </style>
  </head>
  <body>
    <div id="message">
      <h1>Welcome to Firebase Hosting</h1>
      <p>You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go build something extraordinary!</p>
      <ul>
        <li><a target="_blank" href="https://firebase.google.com/docs/hosting/">Open Hosting Documentation</a></li>
      </ul>
    </div>
  </body>
</html> -->*/
