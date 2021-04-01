import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AddProduct from '../AddProduct/AddProduct';
import NoMatch from '../NoMatch/NoMatch';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';


const Admin = () => {
    const { path, url } = useRouteMatch();
    // console.log(path,url);
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link className='mr-5 mb-3' to='/home'>Home</Link>
                        <Link className='mr-5 mb-3' to='/manageProduct'>Manage Product</Link>
                        <Link className='mr-5 mb-3' to={`${url}/addProduct`}>Add Product</Link>
                        <Link className='mr-5 mb-3' to='/editProduct'>Edit Product</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </Route>
                <Route exact path={path}>
                    <h2 className="text text-danger text-center">Welcome to admin panel</h2>
                </Route>
                <Route path='*'>
                    <NoMatch></NoMatch>
                </Route>
            </Switch>

        </div>
    );
};

export default Admin;