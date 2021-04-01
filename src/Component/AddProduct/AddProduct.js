import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import data from '../../fakeData/fakeData.json'


const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL] = useState(null);

    const onSubmit = data => {
        const newMobileData = {
            productName: data.productName,
            addPrice: data.addPrice,
            color: data.color,
            image: imageURL
        }
        console.log(newMobileData);
        
        fetch('http://localhost:5000/addNewMobileInfo',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMobileData)
        })
        .then(res => console.log('server site response'))
    }

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '5c02450f96069390321e19d6eca8acb7');
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => {
               setImageURL(response.data.data.display_url);
               console.log(response.data.data.display_url);
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                            <input className="form-control" type="text" name="productName" placeholder="Enter Name" ref={register({ required: true })} />
                        </Col>
                        <Col md={5}>
                            <label htmlFor="addPrice">Add Price</label>
                            <input className="form-control" type="text" name="addPrice" placeholder="Enter Price" ref={register({ required: true })} />
                        </Col>
                        <Col md={5} className="mt-3">
                            <label htmlFor="color">color</label>
                            <input className="form-control" type="text" name="color" placeholder="Enter Color" ref={register({ required: true })} />
                        </Col>
                        <Col md={5}>
                            <div className="mt-5">
                                <input type="file" name="uploadPhoto" onChange={handleImageUpload} />
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