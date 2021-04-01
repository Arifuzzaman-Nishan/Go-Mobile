import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
// import { faCoffee } from '@fortawesome/free-brands-svg-icons'

const ShowManageProduct = ({ mobileInfo: { _id, color, name, price} }) => {

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('delete');
            }
        })
    }

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{color}</td>
                <td>{price}</td>
                <td style={{cursor:'pointer'}}>
                    <FontAwesomeIcon className="text text-success mr-4" icon={faEdit} />
                    <FontAwesomeIcon onClick={() => handleDelete(_id)} className="text text-danger" icon={faTrashAlt} />
                </td>
            </tr>
        </tbody>
    );
};

export default ShowManageProduct;