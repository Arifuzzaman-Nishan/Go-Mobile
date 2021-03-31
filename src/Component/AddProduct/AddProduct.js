import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <>
            <Container className="mt-5">
                <div>
                    <h2>Add Product</h2>
                </div>
                <form action="">
                    <Row className="justify-content-around mt-5">
                        <Col md={5}>
                            <label htmlFor="productName">Product Name</label>
                            <input className="form-control" type="text" name="productName" placeholder="Enter Name" />
                        </Col>
                        <Col md={5}>
                            <label htmlFor="addPrice">Add Price</label>
                            <input className="form-control" type="text" name="productName" placeholder="Enter Price" />
                        </Col>
                        <Col md={5} className="mt-3">
                            <label htmlFor="color">color</label>
                            <input className="form-control" type="text" name="color" placeholder="Enter Color" />
                        </Col>
                        <Col md={5}>
                            <div className="mt-5">
                                <input type="file" name="uploadPhoto" id="" />
                            </div>
                        </Col>
                        <Col className="mt-5" md={5}>
                            <input className="btn btn-danger form-control" type="submit" value="submit"/>
                        </Col>
                    </Row>
                </form>

            </Container>
        </>
    );
};

export default AddProduct;