import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [user, setUser] = useState({});

      var provider = new firebase.auth.GoogleAuthProvider();
      
      const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          console.log(user);
          setUser(user);

        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage, email);
          
        });
      }
    
    return (
        <div>
            <button onClick={handleGoogleSignIn}> Sign in with Google</button>
            <h3>Email: {user.email}</h3>
            <img src={user.photoURL} alt=""/>            
        </div>
    );
};

export default Login;