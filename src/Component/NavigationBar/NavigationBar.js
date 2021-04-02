
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import './NavigationBar.css';


const NavigationBar = () => {
    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { email, photoURL } = loggedInUser;

    return (
        <Navbar expand="lg">
            <Link className="go-mobile" to='/home'><h1 className='text text-white '>GoMobile</h1></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Link className='p-2 navi mr-5 mb-3 text text-white' to='/home'>Home</Link>
                    <Link className='p-2 navi mr-5 mb-3 text text-white' to='/orders'>Orders</Link>
                    <Link className='p-2 navi mr-5 mb-3 text text-white' to='/admin'>Admin</Link>
                    <Link className='p-2 navi mr-5 mb-3 text text-white' to='/deals'>Deals</Link>

                    {
                        email ?
                            <div className="p-2">

                                <img className="mr-5"
                                    style={{ width: "3rem", borderRadius: "50%" }}
                                    src={photoURL} alt=""
                                />

                                <Button className="" onClick={() => setLoggedInUser({})} variant="danger">SignOut</Button>
                            </div>
                            :
                            <div className="p-2">
                                <Button onClick={() => history.push('/login')} variant="danger">LogIn</Button>
                            </div>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;