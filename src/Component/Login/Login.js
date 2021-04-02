import React, { useContext } from 'react';
import firebaseConfig from './firebase.confiq';
import firebase from "firebase/app";
import "firebase/auth";
import { Button, Card, Container } from 'react-bootstrap';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css';
import NavigationBar from '../NavigationBar/NavigationBar';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

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
                console.log(errorCode, errorMessage);

            });
    }


    return (
        <Container>
            <NavigationBar></NavigationBar>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card className='p-5' style={{}} >
                    <h2 className="text text-danger text-center mb-5">LogIn</h2>
                    <div className="m-auto">
                        <Button className="d-flex" onClick={handleGoogleSignIn} variant='primary'>
                            <FontAwesomeIcon size='2x' className="google mr-3 my-auto" icon={faGoogle} />
                            <p className="m-auto">Sign In With Google</p>
                        </Button>
                    </div>
                </Card>
            </div>

        </Container>
    );
};

export default Login;