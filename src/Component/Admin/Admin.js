import React from 'react';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/Home';
import AddProduct from '../AddProduct/AddProduct';
import NoMatch from '../NoMatch/NoMatch';

const Admin = () => {
    return (
        <div>

            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route path='/addProduct'>
                <AdminNavBar></AdminNavBar>
                <AddProduct></AddProduct>
            </Route>
            <Route path='*'>
                <AdminNavBar></AdminNavBar>
                <NoMatch></NoMatch>
            </Route>

            <h1>welcome to admin panel</h1>
        </div>
    );
};

export default Admin;