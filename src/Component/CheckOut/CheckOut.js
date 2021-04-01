import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import NavigationBar from '../NavigationBar/NavigationBar';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { productKey } = useParams();

    const handleCheckOut = () => {
        const newOrder = {
            email: loggedInUser.email,
            image: product.image,
            productName: product.name,
            quantity: product.quantity,
            price: product.price,
            date: (new Date().toDateString('dd/MM/yyyy'))
        }

        fetch("http://localhost:5000/order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(result => {
                if (result) {
                    alert("order added");
                }
            })
    }




    // console.log(order);

    console.log(productKey);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/product/' + productKey)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productKey])

    // console.log(product);
    const { name, quantity, price } = product;
    return (
        <Container className="">
            <NavigationBar></NavigationBar>
            <Table className="mt-5" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>$ {price}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>$ {price}</td>
                    </tr>
                </tbody>
            </Table>
            <div className='d-flex justify-content-end'>
                <Button onClick={handleCheckOut} size='lg' variant='danger'>CheckOut</Button>
            </div>
        </Container>
    );
};

export default CheckOut;