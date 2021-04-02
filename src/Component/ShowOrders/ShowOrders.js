import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ShowOrders.css';

const ShowOrders = ({ order: { productName, image, date, quantity, price } }) => {
    return (
        <Row>
            <Col className='mb-5'>
                <Card className='p-4 bg'>
                    <Row className="d-flex text text-white">
                        <Col md={3}>
                            <Card.Img className="mb-3" variant="top" src={image} />
                        </Col>
                        <Col md={3} className="m-auto">
                            <Card.Title>{productName}</Card.Title>
                            <p>price: ${price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Date: {date}</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
};

export default ShowOrders;