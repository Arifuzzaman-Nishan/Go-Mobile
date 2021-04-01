import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import ShowManageProduct from '../ShowManageProduct/ShowManageProduct';

const ManageProduct = () => {
    const [mobileInfos, setMobileInfos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/mobileInfo')
            .then(res => res.json())
            .then(data => setMobileInfos(data))
    }, [])

    console.log(mobileInfos);

    return (
        <Container>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {
                    mobileInfos.map(mobileInfo => <ShowManageProduct mobileInfo={mobileInfo} key={mobileInfo._id}></ShowManageProduct>)
                }
            </Table>
        </Container>
    );
};

export default ManageProduct;