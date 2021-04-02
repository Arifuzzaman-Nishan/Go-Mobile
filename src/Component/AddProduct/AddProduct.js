import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [spinner, setSpinner] = useState(false);

    const onSubmit = data => {

        const newMobileData = {
            name: data.productName,
            price: data.addPrice,
            color: data.color,
            image: imageURL
        }

        // send data to the database 

        fetch('https://fathomless-island-94500.herokuapp.com/addNewMobileInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMobileData)
        })
            .then(res => {
                if (res) {
                    alert("Data successfully inserted");
                }
            })
    }

    // for image upload
    const handleImageUpload = (event) => {
        setSpinner(true);
        const imageData = new FormData();
        imageData.set('key', '5c02450f96069390321e19d6eca8acb7');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => {
                setSpinner(false);
                setImageURL(response.data.data.display_url);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
            <Container className="mt-5">
                <div style={{ display: spinner ? "block" : "none" }}>

                    {/* spinner for image upload */}
                    <Loader className="d-flex justify-content-center align-items-center"
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                    <h1 className="text text-white text-center">wait image is uploading....</h1>
                </div>
                <div style={{ display: spinner ? "none" : "block" }}>
                    <div>
                        <h2 className="text text-white">Add Product</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="justify-content-around mt-5">
                            <Col md={5}>
                                <label className="text text-white" htmlFor="productName">Product Name</label>
                                <input className="form-control" type="text" name="productName" placeholder="Enter Name" ref={register({ required: true })} />
                            </Col>
                            <Col md={5}>
                                <label className="text text-white" htmlFor="addPrice">Add Price</label>
                                <input className="form-control" type="text" name="addPrice" placeholder="Enter Price" ref={register({ required: true })} />
                            </Col>
                            <Col md={5} className="mt-3">
                                <label className="text text-white" htmlFor="color">color</label>
                                <input className="form-control" type="text" name="color" placeholder="Enter Color" ref={register({ required: true })} />
                            </Col>

                            {/* for image upload */}
                            <Col md={5}>
                                <div className="mt-5">
                                    <input className="text text-white" type="file" name="uploadPhoto" onChange={handleImageUpload} />
                                </div>
                            </Col>
                            <Col className="mt-5" md={5}>
                                <input className="btn btn-danger form-control" type="submit" value="submit" />
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
    );
};

export default AddProduct;