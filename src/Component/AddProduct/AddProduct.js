import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Container className="mt-5">
                <div>
                    <h2>Add Product</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="justify-content-around mt-5">
                        <Col md={5}>
                            <label htmlFor="productName">Product Name</label>
                            <input className="form-control" type="text" name="productName" placeholder="Enter Name" ref={register({ required: true })}/>
                        </Col>
                        <Col md={5}>
                            <label htmlFor="addPrice">Add Price</label>
                            <input className="form-control" type="number" name="addPrice" placeholder="Enter Price" ref={register({ required: true })}/>
                        </Col>
                        <Col md={5} className="mt-3">
                            <label htmlFor="color">color</label>
                            <input className="form-control" type="text" name="color" placeholder="Enter Color" ref={register({ required: true })}/>
                        </Col>
                        <Col md={5}>
                            <div className="mt-5">
                                <input type="file" name="uploadPhoto" id="" />
                            </div>
                        </Col>
                        <Col className="mt-5" md={5}>
                            <input className="btn btn-danger form-control" type="submit" value="submit" />
                        </Col>
                    </Row>
                </form>

            </Container>
        </>
    );
};

export default AddProduct;