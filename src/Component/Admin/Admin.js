import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AddProduct from '../AddProduct/AddProduct';
import NoMatch from '../NoMatch/NoMatch';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';
import { userContext } from '../../App';
import EditProduct from '../EditProduct/EditProduct';


const Admin = () => {
    const { path, url } = useRouteMatch();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { displayName, email, photoURL } = loggedInUser;
    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link className='navi p-2 text text-white mr-5 mb-3' to='/home'>Home</Link>
                        <Link className='navi p-2 text text-white mr-5 mb-3' to={`${url}/manageProduct`}>Manage Product</Link>
                        <Link className='navi p-2 text text-white mr-5 mb-3' to={`${url}/addProduct`}>Add Product</Link>
                        <Link className='navi p-2 text text-white mr-5 mb-3' to={`${url}/editProduct`}>Edit Product</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </Route>
                <Route path={`${path}/manageProduct`}>
                    <ManageProduct></ManageProduct>
                </Route>
                <Route path={`${path}/editProduct`}>
                    <EditProduct></EditProduct>
                </Route>
                <Route exact path={path}>
                    <h2 className="text text-white text-center mt-5 mb-5">Welcome to admin panel</h2>
                    <Card className="m-auto p-3" style={{ width: '19rem' }}>
                        <img className="m-auto" style={{borderRadius:"50%",width:"12rem"}} src={photoURL} alt=""/>
                        <Card.Body>
                            <Card.Title>{displayName}</Card.Title>
                            <Card.Text>
                                {email}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Route>
                <Route path='*'>
                    <NoMatch></NoMatch>
                </Route>
            </Switch>

        </Container>
    );
};

export default Admin;