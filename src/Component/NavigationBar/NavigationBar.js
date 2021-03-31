  
import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
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
                        <Button variant="danger">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;