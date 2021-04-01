import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowOrders = ({ order: { productName, image, date, quantity, price } }) => {
    return (
        <div>
            <Card className="p-4 mb-5" style={{ width: '46rem' }}>
                <div className="d-md-flex align-items-center">
                    <Col md={7}>
                        <img style={{ width: '15rem' }} src={image} alt="" />
                        <h3>{productName}</h3>
                    </Col>
                    <Col md={4}>
                        <h5>Price: ${price}</h5>
                        <h5>Quantity: ${quantity}</h5>
                        <h5>Date: {date}</h5>
                    </Col>
                </div>
            </Card>
        </div>
    );
};

export default ShowOrders;