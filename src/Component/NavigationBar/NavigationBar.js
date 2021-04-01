
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';


const NavigationBar = () => {
    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { email, photoURL } = loggedInUser;
    console.log(loggedInUser);
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Link to='/home'><h1 className='text  text-dark'>GoMobile</h1></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className='mr-5 mb-3' to='/home'>Home</Link>
                        <Link className='mr-5 mb-3' to='/orders'>Orders</Link>
                        <Link className='mr-5 mb-3' to='/admin'>Admin</Link>
                        <Link className='mr-5 mb-3' to='/deals'>Deals</Link>

                        {
                            email ?
                                <>
                                    <img className="mr-5"
                                        style={{ width: "3rem", borderRadius: "50%"}}
                                        src={photoURL} alt=""
                                    />
                                    <Button className="" onClick={() => setLoggedInUser({})} variant="danger">SignOut</Button>
                                </>
                                :
                                <Button onClick={() => history.push('/login')} variant="danger">LogIn</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;