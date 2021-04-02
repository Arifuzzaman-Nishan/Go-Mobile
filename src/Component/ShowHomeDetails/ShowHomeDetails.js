import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ShowHomeDetails = ({ mobileData: {_id, name, price, image } }) => {

    const history = useHistory();
    const handleCheckOut = (id)=>{
       history.push(`/checkOut/${id}`)
    }

    return (
        <Col md={6} lg={4} className='mb-5'>
            <Card className='p-3 mx-auto' style={{ width: '18rem', height: '400px', cursor: "pointer" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body className='d-flex align-items-end'>
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <div style={{ width: '13rem' }} className='d-flex'>
                            <h4>${price}</h4>
                            <Button onClick={() => handleCheckOut(_id)} className='ml-auto' variant="danger">Buy Now</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShowHomeDetails;