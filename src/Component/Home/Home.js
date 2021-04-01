import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowHomeDetails from '../ShowHomeDetails/ShowHomeDetails';
import data from '../../fakeData/fakeData.json';
import NavigationBar from '../NavigationBar/NavigationBar';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Home = () => {
    const [mobilesData, setMobilesData] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/mobileInfo')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setSpinner(false);
                    setMobilesData(data)
                }, 1000)
            })
    }, [])
    console.log(mobilesData);

    // useEffect(() => {
    //     setMobilesData(data)
    // }, [])

    // console.log(mobilesData)
    return (
        <Container>
            {
                spinner ? <Loader className="d-flex justify-content-center align-items-center"
                    style={{ height: '100vh' }}
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    // timeout={60000} //6 secs
                />
                    :
                    <>
                        <NavigationBar></NavigationBar>
                        <Row>
                            {
                                mobilesData.map(mobileData => <ShowHomeDetails key={mobileData._id} mobileData={mobileData}></ShowHomeDetails>)
                            }
                        </Row>
                    </>
            }


        </Container>
    );
};

export default Home;