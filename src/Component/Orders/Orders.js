import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { userContext } from '../../App';
import NavigationBar from '../NavigationBar/NavigationBar';
import ShowOrders from '../ShowOrders/ShowOrders';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/showOrder?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    // const { productName, image, date, quantity, price } = order;

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <h2 className="text text-white mt-4">Order List</h2>
            <Row className="mt-5">
                {
                    orders.map(order => <ShowOrders order={order} key={order.productName}></ShowOrders>)
                }
            </Row>
        </Container>
    );
};

export default Orders;



