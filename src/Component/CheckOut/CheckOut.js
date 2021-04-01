import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {productKey} = useParams();
    console.log(productKey);

    useEffect(()=>{
        fetch('http://localhost:5000/product/'+productKey)
        .then(res => res.json())
        .then(data => console.log(data))
    },[productKey])
    return (
        <div>
            <h1>CheckOut</h1>
        </div>
    );
};

export default CheckOut;