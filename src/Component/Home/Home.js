import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowHomeDetails from '../ShowHomeDetails/ShowHomeDetails';
import data from '../../fakeData/fakeData.json';
import NavigationBar from '../NavigationBar/NavigationBar';

const Home = () => {
    const [mobilesData, setMobilesData] = useState([]);

    useEffect(() => {
        setMobilesData(data)
    }, [])

    // console.log(mobilesData)
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Row>
                {
                    mobilesData.map(mobileData => <ShowHomeDetails mobileData={mobileData}></ShowHomeDetails>)
                }
            </Row>
        </Container>
    );
};

export default Home;