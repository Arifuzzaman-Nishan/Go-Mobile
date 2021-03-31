import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link className='mr-5 mb-3' to='/home'>Home</Link>
                        <Link className='mr-5 mb-3' to='/manageProduct'>Manage Product</Link>
                        <Link className='mr-5 mb-3' to='/addProduct'>Add Product</Link>
                        <Link className='mr-5 mb-3' to='/editProduct'>Edit Product</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminNavBar;