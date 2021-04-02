import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import ShowManageProduct from '../ShowManageProduct/ShowManageProduct';

const ManageProduct = () => {
    const [mobileInfos, setMobileInfos] = useState([]);

    // get mobileData from dataBase 
    useEffect(() => {
        fetch('https://fathomless-island-94500.herokuapp.com/mobileInfo')
            .then(res => res.json())
            .then(data => setMobileInfos(data))
    }, [])


    return (
            <Table striped hover className="bg-white">
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
    );
};

export default ManageProduct;