import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AddProduct from '../AddProduct/AddProduct';
import NoMatch from '../NoMatch/NoMatch';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';


const Admin = () => {
    const { path, url } = useRouteMatch();
    // console.log(path,url);
    return (
        <Container>

            <Navbar expand="lg">
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link className='navi p-2 text text-white mr-5 mb-3' to='/home'>Home</Link>
                        <Link className='navi p-2 text text-white mr-5 mb-3' to={`${url}/manageProduct`}>Manage Product</Link>
                        <Link className='navi p-2 text text-white mr-5 mb-3' to={`${url}/addProduct`}>Add Product</Link>
                        <Link className='navi p-2 text text-white mr-5 mb-3' to='/editProduct'>Edit Product</Link>
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
                <Route exact path={path}>
                    <h2 className="text text-white text-center mt-5">Welcome to admin panel</h2>
                </Route>
                <Route path='*'>
                    <NoMatch></NoMatch>
                </Route>
            </Switch>

        </Container>
    );
};

export default Admin;