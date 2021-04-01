import React, { useContext } from 'react';
import firebaseConfig from './firebase.confiq';
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from 'react-bootstrap';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser,setLoggedInUser] = useContext(userContext);

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                console.log(user);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage);
                
            });
    }


    return (
        <div>
            <Button onClick={handleGoogleSignIn} variant='primary'>Sign In With Google</Button>
        </div>
    );
};

export default Login;