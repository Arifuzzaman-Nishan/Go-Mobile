import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowHomeDetails from '../ShowHomeDetails/ShowHomeDetails';
import NavigationBar from '../NavigationBar/NavigationBar';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './Home.css';

const Home = () => {
    const [mobilesData, setMobilesData] = useState([]);
    const [spinner, setSpinner] = useState(true);

    // get data from database
    useEffect(() => {
        fetch('https://fathomless-island-94500.herokuapp.com/mobileInfo')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setSpinner(false);
                    setMobilesData(data)
                }, 1000)
            })
    }, [])


    return (
        <Container>
            {
                // spinner for home page

                spinner ? <Loader className="d-flex justify-content-center align-items-center"
                    style={{ height: '100vh' }}
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
                    :
                    <>
                        <NavigationBar></NavigationBar>
                        <Row className="mt-5">
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